const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    task_name: { type: String, required: true }, // Each task should have a unique name
    description: { type: String, required: true }, // Ensure description is always provided
    assigned_to: { type: String, required: true }, // Required field to assign task
    due_date: { type: Date, required: true }, // Use Date type for due dates
    assignee: { type: String, required: true }, // Removed unique constraint
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
