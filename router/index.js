import express from 'express';
const router = express.Router();
import { addTask, showTask, deleteTask } from '../server/controller/controller.js';

router.post("/add", addTask);
router.get("/show", showTask);
router.delete("/task/:_id", deleteTask);

export default router;

