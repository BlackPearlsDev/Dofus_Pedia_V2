import express from 'express'
import { getAll } from '../controllers/race.js';

const router = express.Router();

// GET
router.get("/all", getAll);

export default router;