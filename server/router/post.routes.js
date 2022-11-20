import express from 'express'
import { getAll, getOneById, create, remove, update } from '../controllers/post.js';

const router = express.Router();

// GET
router.get("/all", getAll);
router.get("/:id", getOneById);

// POST
router.post("/create", create);

// DELETE
router.delete("/delete/:id", remove);

// UPDATA
router.put("/update/:id", update);

export default router;