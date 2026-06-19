import Song from '../models/Song.js';

export const getSongById = async (id) => {
    const song = await Song.findByPk(id);
    if (!song) return null;
    return song;
};