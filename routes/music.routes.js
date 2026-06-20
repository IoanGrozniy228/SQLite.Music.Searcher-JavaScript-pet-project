import { Router } from "express";
import * as musicController from "../controllers/music.controller.js";

const router = new Router();
router.get('/', musicController.getHome); 
router.get('/music/song/:id', musicController.getSong);
router.get('/music/album/:id', musicController.getAlbum);
router.get('/music/author/:id', musicController.getAuthor);
router.get('/music/authorAlbums/:name', musicController.getAllAlbumsOfAuthor);
router.get('/music/albumSongs/:name', musicController.getAllSongsOfAlbum);
router.get('/music/authorSongs/:name', musicController.getAllSongsOfAuthor);
export default router;