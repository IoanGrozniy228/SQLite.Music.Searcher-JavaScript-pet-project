import { Router } from "express";
import { getSong, getAlbum, getAuthor, getAllAlbumsOfAuthor, getAllSongsOfAlbum, getAllSongsOfAuthor } from "../controllers/music.controller.js";

const router = new Router();
router.get('/music/song/:id', getSong);
router.get('/music/album/:id', getAlbum);
router.get('/music/author/:id', getAuthor);
router.get('/music/authorAlbums/:name', getAllAlbumsOfAuthor);
router.get('/music/albumSongs/:name', getAllSongsOfAlbum);
router.get('/music/authorSongs/:name', getAllSongsOfAuthor);
export default router;