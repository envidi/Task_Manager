const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, getOneTask, updateTask, deleteTask} = require('../controllers/tasks.js');


router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getOneTask).patch(updateTask).delete(deleteTask)


module.exports = router