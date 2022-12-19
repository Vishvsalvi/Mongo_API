const express = require('express');
const router = express.Router()
const {getAllTask, createTask, getTask, deleteTask } = require("../Controller/controllers")


router.route("/").get(getAllTask).post(createTask);
router.route('/:id').get(getTask).delete(deleteTask)

module.exports = router