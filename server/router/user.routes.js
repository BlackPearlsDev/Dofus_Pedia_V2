import express from 'express'
import { getAll, getOne, register, login, update, remove } from '../controllers/user.js';
import { auth } from '../middlewares/auth.js';

const router = express.Router();

// MIDDLEWARES
router.get("/checkToken", auth, getOne)

// GET
router.get("/all", getAll);
router.get("/:uuid", getOne);

// POST
router.post("/register", register);
router.post("/login", login);

// PATCH
router.patch("/:uuid", update);

// DELETE
router.delete("/:uuid", remove)

export default router;