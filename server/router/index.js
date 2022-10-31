import express from 'express';
import userRoutes from './user.routes.js';
import classesRoutes from './classes.routes.js';
import monstersRoutes from './monsters.routes.js';
import ecosystemRoutes from './ecosystem.routes.js';
import raceRoutes from './race.routes.js';
import spellsRoutes from './spells.routes.js';
import postRoutes from './post.routes.js';
import categoriesRoutes from './categories.routes.js';

const router = express.Router();

router.use("/api/v1/user", userRoutes);
router.use("/api/v1/classes", classesRoutes);
router.use("/api/v1/monsters", monstersRoutes);
router.use("/api/v1/ecosystem", ecosystemRoutes);
router.use("/api/v1/race", raceRoutes);
router.use("/api/v1/spells", spellsRoutes);
router.use("/api/v1/post", postRoutes);
router.use("/api/v1/categories", categoriesRoutes);

export default router;