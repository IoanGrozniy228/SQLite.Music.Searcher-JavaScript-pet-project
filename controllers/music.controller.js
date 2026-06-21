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
        const song = await musicService.getSongByName(req.params.name);
        if (!song) return res.status(400).json({ message: 'Cannot find the song' });
        return res.json(song);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAlbum = async (req, res) => {
    try {
        const album = await musicService.getAlbumByName(req.params.name);
        if (!album) return res.status(400).json({ message: 'Cannot find the album' });
        return res.json(album);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAuthor = async (req, res) => {
    try {
        const author = await musicService.getAuthorByName(req.params.name);
        if (!author) return res.status(400).json({ message: 'Cannot find the author' });
        return res.json(author);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAllAlbumsOfAuthor = async (req, res) => {
    try {
        const albums = await musicService.getAllAlbumsOfAuthorByName(req.params.name);
        const author = await musicService.getAuthorByName(req.params.name);
        if (!albums&&!author) return res.status(400).json({ message: 'Cannot find the albums or author' });
        return res.json({albums, author});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAllSongsOfAlbum = async (req, res) => {
    try {
        const albums = await musicService.getAlbumByName(req.params.name);
        const songs = [];
        for (const album of albums) {
            const albumSongs = await musicService.getAllSongsOfAlbumByName(album.name);
            if (albumSongs) {
                songs.push(...albumSongs);
            }
        }
        if (!songs&&!albums) return res.status(400).json({ message: 'Cannot find the songs or album' });
        return res.json({ songs, albums });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

export const getAllSongsOfAuthor = async (req, res) => {
    try {
        const songs = await musicService.getAllSongsOfAuthorByName(req.params.name);
        const author = await musicService.getAuthorByName(req.params.name);
        if (!songs&&!author) return res.status(400).json({ message: 'Cannot find the songs, albums or author' });
        return res.json({songs, author});
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};