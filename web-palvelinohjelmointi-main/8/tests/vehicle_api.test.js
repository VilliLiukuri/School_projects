const mongoose = require('mongoose')
const supertest = require('supertest')
const Vehicle = require('../models/Vehicle')
const testVehicles = require('./data.json')
const app = require('../app')
const api = supertest(app)

beforeEach(async () => {
  await Vehicle.deleteMany({})
  await Vehicle.create(testVehicles)
})

test('vehicles returned as json', async () => {
  await api
    .get('/api/vehicles')
    .expect(200)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/vehicles')
  const vehicles = response.body.vehicles
  console.log(`Number of vehicles: ${vehicles.length}`)
})

test('a new vehicle can be added ', async () => {
  const newVehicle = {
    'make':'Volovo',
    'model':'P1800'
  }

  await api
    .post('/api/vehicles')
    .send(newVehicle)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/vehicles')
  expect(response.body.vehicles).toHaveLength(testVehicles.length + 1)
})

test('a vehicle can be deleted', async () => {
  const vehicleToDelete = {
    'make':'Lada',
    'model':'Samara'
  }

  // Query the API to get the ID of the vehicle to be deleted
  const response = await api.get('/api/vehicles')
  const vehicle = response.body.vehicles.find(v => v.make === vehicleToDelete.make && v.model === vehicleToDelete.model)
  const vehicleId = vehicle._id

  // Delete the vehicle
  await api
    .delete(`/api/vehicles/${vehicleId}`)
    .expect(200)
    .expect('Content-Type', /application\/json/)

  // Verify that the vehicle was deleted
  const newResponse = await api.get('/api/vehicles')
  expect(newResponse.body.vehicles).toHaveLength(testVehicles.length - 1)
})

afterAll(() => {
  mongoose.connection.close()
})