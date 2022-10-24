import express from 'express'
import { getAll } from '../controllers/monsters.js';
import { addMonster, addImg, deleteMonster } from '../controllers/monsters.js';

const router = express.Router();

// GET
router.get("/all", getAll);

// POST
router.post("/add", addMonster);
router.post("/addImg", addImg);

// DELETE
router.delete("/delete/:id", deleteMonster);

export default router;