import { Router } from "express";
import * as musicController from "../controllers/music.controller.js";

const router = new Router();
router.get('/', musicController.getHome); 
router.get('/music/songs/:name', musicController.getSong);
router.get('/music/albums/:name', musicController.getAlbum);
router.get('/music/authors/:name', musicController.getAuthor);
router.get('/music/authorAlbums/:name', musicController.getAllAlbumsOfAuthor);
router.get('/music/albumSongs/:name', musicController.getAllSongsOfAlbum);
router.get('/music/authorSongs/:name', musicController.getAllSongsOfAuthor);
export default router;