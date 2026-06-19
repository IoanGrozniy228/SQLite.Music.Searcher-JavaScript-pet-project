import * as musicService from '../services/music.service.js';

export const getSong = async (req, res) => {
    try {
        const song = await musicService.getSongById(req.params.id);
        if (!song) return res.status(400).json({ message: 'Cannot find the song' });
        return res.json(song);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};