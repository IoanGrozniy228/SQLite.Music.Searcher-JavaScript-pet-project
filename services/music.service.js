import Song from '../models/Song.js';
import Album from '../models/Album.js';
import Author from '../models/Author.js';

export const getAllSongs = async () => {
    const song = await Song.findAll();
    if (!song) return null;
    return song;
};

export const searchSong = async (name) => {
    const song = await Song.findOne({where: {name}});
    if (!song) return null;
    return song;
};

export const getSongById = async (id) => {
    const song = await Song.findByPk(id);
    if (!song) return null;
    return song;
};

export const getAlbumById = async (id) => {
    const album = await Album.findByPk(id);
    if (!album) return null;
    return album;
};

export const getAuthorById = async (id) => {
    const author = await Author.findByPk(id);
    if (!author) return null;
    return author;
};

export const getAllAlbumsOfAuthorByName = async (name) => {
    const author = await Author.findOne({where: {name}});
    if (!author) return null;
    const authorId = author.id_author;
    const albums = await Album.findAll({where:{id_author: authorId}});
    return albums;
};

export const getAllSongsOfAlbumByName = async (name) => {
    const album = await Album.findOne({where: {name}});
    if (!album) return null;
    const albumId = album.id_album;
    const songs = await Song.findAll({where:{id_album: albumId}});
    return songs;
};

export const getAllSongsOfAuthorByName = async (name) => {
    const author = await Author.findOne({where: {name}});
    if (!author) return null;
    const authorId = author.id_author;
    const albums = await Album.findAll({where:{id_author: authorId}});
    if (!albums) return null;
    let songs = [];
     for (const album of albums) {
        const albumSongs = await Song.findAll({ where: { id_album: album.id_album } });
        songs = songs.concat(albumSongs);
    }
    return songs;
};