const Task = require("../models/task");
const express = require("express");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'PUT' REQUEST */
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) { return(res.status(404).json("Task not found"))}
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });
    
    res.status(200).json(updatedTask);
  } catch(error) {
    res.send(error);
  }
});

/* CREATE 'DELETE' REQUEST */
router.delete("/:id", async (req, res) => {
  try {
    console.log("Trying to delete")
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) { return res.status(404).send("No video found")}
    res.status(200).send("Task Deleted")
  } catch(error) {
    res.send(error);
  }
});

module.exports = router;

