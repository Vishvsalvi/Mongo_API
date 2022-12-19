const Task = require("../Model/model");
// Get all task
const getAllTask = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Get one task
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ message: "No task found" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Create a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Delete a task
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });

    if (!task) {
      return res.status(404).json({ message: "No task found" });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Update a task
// const updateTask = async (req, res) => {
//   try {
//     const { id: taskID } = req.params;

//     const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!task) {
//       return res.status(404).json({ message: "No task found" });
//     }
//     return res.status(200).json({task})
//   } catch (error) {}
// };

module.exports = { getAllTask, getTask, createTask, deleteTask };
