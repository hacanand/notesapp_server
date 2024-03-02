const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    groups: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema)

module.exports = Note
