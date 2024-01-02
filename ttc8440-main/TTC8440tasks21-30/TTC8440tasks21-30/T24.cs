using System;
using System.Collections.Generic;
using static T24_Vehicle.T24;

namespace T24_Vehicle
{
    internal class T24
    {
        public static void Vehicle()
        {
            // Create a car with four tires
            List<Tire> carTires = new List<Tire>();
            for (int i = 0; i < 4; i++)
            {
                carTires.Add(new Tire("Michelin", "Pilot Sport 4S", "245/35ZR20"));
            }
            vehicle car = new vehicle("Ferrari", "488 Pista", carTires);

            // Create a motorcycle with two tires
            List<Tire> motorcycleTires = new List<Tire>();
            motorcycleTires.Add(new Tire("Bridgestone", "Battlax Hypersport S22", "120/70ZR17"));
            motorcycleTires.Add(new Tire("Bridgestone", "Battlax Hypersport S22", "190/55ZR17"));
            vehicle motorcycle = new vehicle("Ducati", "Panigale V4 R", motorcycleTires);

            // Print information about the vehicles and their tires
            Console.WriteLine($"Created a new vehicle {car.Name} model {car.Model}");
            foreach (Tire tire in car.Tires)
            {
                Console.WriteLine($"Tire {tire.Manufacturer} added to vehicle {car.Name}");
            }
            Console.WriteLine($"Vehicle Name: {car.Name} Model: {car.Model} has tires:");
            foreach (Tire tire in car.Tires)
            {
                Console.WriteLine($"-Name: {tire.Manufacturer} Model: {tire.Model} TireSize: {tire.TireSize}");
            }

            Console.WriteLine();

            Console.WriteLine($"Created a new vehicle {motorcycle.Name} model {motorcycle.Model}");
            foreach (Tire tire in motorcycle.Tires)
            {
                Console.WriteLine($"Tire {tire.Manufacturer} added to vehicle {motorcycle.Name}");
            }
            Console.WriteLine($"Vehicle Name: {motorcycle.Name} Model: {motorcycle.Model} has tires:");
            foreach (Tire tire in motorcycle.Tires)
            {
                Console.WriteLine($"-Name: {tire.Manufacturer} Model: {tire.Model} TireSize: {tire.TireSize}");
            }
        }
        public class Tire
        {
            public string Manufacturer { get; set; }
            public string Model { get; set; }
            public string TireSize { get; set; }

            public Tire(string manufacturer, string model, string tireSize)
            {
                Manufacturer = manufacturer;
                Model = model;
                TireSize = tireSize;
            }
        }

        public class vehicle
        {
            public string Name { get; set; }
            public string Model { get; set; }
            public List<Tire> Tires { get; set; }

            public vehicle(string name, string model, List<Tire> tires)
            {
                Name = name;
                Model = model;
                Tires = tires;
            }
        }
    }
}