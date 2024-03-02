const NoteRepository = require("../repository/note-repository");
const noteRepository = new NoteRepository();
const getNoteById = async (req, res) => {
  try {
    const response = await noteRepository.getNoteById(req.params.id);
    res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "note found successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "cannot find note",
    });
  }
};
const createNote = async (req, res) => {
  try {
    const { content, groups } = await req.body;
    if (!content || !groups) {
      return res.status(400).json({
        success: false,
        message: "Please enter all fields",
      });
    }
    const response = await noteRepository.createNote(req.body);
    res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "note created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "cannot create note",
    });
  }
};
const deleteNote = async (req, res) => {
  try {
    const response = await noteRepository.deleteNote(req.body);
    res.status(201).json({
      success: true,
      data: response,
      err: {},
      message: "note deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "cannot delete note",
    });
  }
};

module.exports = { getNoteById, createNote };
