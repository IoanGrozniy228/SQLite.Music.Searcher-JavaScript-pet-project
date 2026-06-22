import Song from '../models/Song.js';
import Album from '../models/Album.js';
import Author from '../models/Author.js';
import { Op } from 'sequelize';

export const getAllSongs = async () => {
    const song = await Song.findAll();
    if (!song) return null;
    return song;
};

export const getSongByName = async (name) => {
    const song = await Song.findAll({ where: { name: { [Op.like]: `%${name}%` } } });
    if (!song) return null;
    return song;
};

export const getAlbumByName = async (name) => {
    const album = await Album.findAll({where: { name: { [Op.like]: `%${name}%` } }});
    if (!album) return null;
    return album;
};

export const getAuthorByName = async (name) => {
    const author = await Author.findAll({where: { name: { [Op.like]: `%${name}%` } }});
    if (!author) return null;
    return author;
};

export const getAllAlbumsOfAuthorByName = async (name) => {
    const author = await Author.findOne({where: { name: { [Op.like]: `%${name}%` } }});
    if (!author) return null;
    const authorId = author.id_author;
    const albums = await Album.findAll({ where: { id_author: authorId } });
    return albums;
};

export const getAllSongsOfAlbumByName = async (name) => {
    const album = await Album.findOne({where: { name: { [Op.like]: `%${name}%` } }});
    if (!album) return null;
    const albumId = album.id_album;
    const songs = await Song.findAll({where:{id_album: albumId}});
    return songs;
};

export const getAllSongsOfAuthorByName = async (name) => {
    const author = await Author.findOne({where: { name: { [Op.like]: `%${name}%` } }});
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