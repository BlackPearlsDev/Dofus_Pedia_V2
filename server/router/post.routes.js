import express from 'express'
import { getAll, getOneById, create, remove } from '../controllers/post.js';

const router = express.Router();

// GET
router.get("/all", getAll);
router.get("/:id", getOneById);

// POST
router.post("/create", create);

// DELETE
router.delete("/delete/:id", remove);

export default router;