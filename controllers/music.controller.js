import * as musicService from '../services/music.service.js';

export const getHome = async (req, res) => {
    const songs = await musicService.getAllSongs();
    res.render('index', { songs });
};

export const searchApi = async (req, res) => {
    const query = req.query.query;
    const songs = await musicService.searchSong(query);
    res.json(songs);
};

export const getSong = async (req, res) => {
    try {
        const song = await musicService.getSongById(req.params.id);
        if (!song) return res.status(400).json({ message: 'Cannot find the song' });
        return res.json(song);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAlbum = async (req, res) => {
    try {
        const album = await musicService.getAlbumById(req.params.id);
        if (!album) return res.status(400).json({ message: 'Cannot find the album' });
        return res.json(album);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAuthor = async (req, res) => {
    try {
        const author = await musicService.getAuthorById(req.params.id);
        if (!author) return res.status(400).json({ message: 'Cannot find the author' });
        return res.json(author);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAllAlbumsOfAuthor = async (req, res) => {
    try {
        const albums = await musicService.getAllAlbumsOfAuthorByName(req.params.name);
        if (!albums) return res.status(400).json({ message: 'Cannot find the author or albums' });
        return res.json(albums);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAllSongsOfAlbum = async (req, res) => {
    try {
        const songs = await musicService.getAllSongsOfAlbumByName(req.params.name);
        if (!songs) return res.status(400).json({ message: 'Cannot find the songs or album' });
        return res.json(songs);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAllSongsOfAuthor = async (req, res) => {
    try {
        const songs = await musicService.getAllSongsOfAuthorByName(req.params.name);
        if (!songs) return res.status(400).json({ message: 'Cannot find the songs, albums or author' });
        return res.json(songs);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};