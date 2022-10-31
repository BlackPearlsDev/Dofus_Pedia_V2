import express from 'express'
import { getAll, create } from '../controllers/categories.js';

const router = express.Router();

// GET
router.get("/all", getAll);

// POST
router.post("/create", create);

export default router;