const albumsRouter = require('express').Router()

const {
    getAlbums,
    createArtist
} = require('../controllers/albums')

albumsRouter.route('/').get(getAlbums).post(createArtist)

module.exports = albumsRouter