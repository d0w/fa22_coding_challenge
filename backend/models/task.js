const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
const TaskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model("Task", TaskSchema);
