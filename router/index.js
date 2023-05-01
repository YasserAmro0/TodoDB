const router = require('express').Router();
const { addTask, showTask, deleteTask } = require('../server/controller/controller');

router.post("/add", addTask);
router.get("/show", showTask);
router.delete("/task/:_id", deleteTask);
module.exports = router;

