const Note = require("../models/notesdata");
const Group = require("../models/groupdata");
class NoteRepository {
  async createNote(data) {
    try {
      const createdNote = await Note.create(data);
      let ObjId = (createdNote.id);
      let group = await Group.findById(data.groups);
      console.log(group)
      group.notes.push(ObjId);
      await group.save();
      return createdNote;
    } catch (error) {
      throw error;
    }
  }
  async deleteNote(id) {
    try {
      const deletedNote = await Note.findByIdAndDelete(id);
      let group = await Group.findById(deletedNote.groups);
      group.notes.pull(id);
      await group.save();
      return deletedNote;
    }
    catch (error) {
      throw error;
    }
  }
}

module.exports = NoteRepository;
