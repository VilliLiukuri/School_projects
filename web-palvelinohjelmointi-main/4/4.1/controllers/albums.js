let { albums } = require('../data')

const getAlbums = (_req,res)=>{
    res.status(200).json({success:true,data:albums})
}

const createArtist = (req,res)=>{
    const artist = req.body.artist
    // alternative syntax
    // const {name} = req.body
    if(!artist){
        return res.status(400).json({success:false})
    }
    // ID creation is for testing purposes only, this will be omitted when we convert to using databases
    const maxId = Math.max(...albums.map(album => album.id), 0)
    const newID = (maxId+1)
    const album = {
        id:newID,
        artist,
    }
    albums = albums.concat(album)
    res.status(201).json({success:true,album:artist})
}

module.exports = { getAlbums, createArtist }