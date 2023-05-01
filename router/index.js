const router = require('express').Router();
const { addTask, showTask } = require('../server/controller/controller');

router.post("/add", addTask);
router.get("/show", showTask);

module.exports = router;

