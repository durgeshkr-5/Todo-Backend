const Note = require("../model/notes.model");


// create note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ msg: "Title and content are required!!!" });
    }

    console.log(req.user);

    const newNote = new Note({
      title,
      content,
      createdBy: req.user.userId,
    });

    const note = await newNote.save();
    return res.status(201).json({ msg: "Note created successfully!", note });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

//get notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user.userId });
    if (!notes || notes.length === 0) {
      return res.status(404).json({ msg: "No notes found!" });
    }
    return res.status(200).json({ notes });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

//update note by id
const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    if (!title || !content) {
      return res.status(400).json({ msg: "Title and content are required!" });
    }

    const note = await Note.findOne({ createdBy: req.user.userId, _id: id });

    if (!note) {
      return res.status(404).json({ msg: "Note not found or Invalid id" });
    }
    if (title) {
      note.title = title;
    }
    if (content) {
      note.content = content;
    }

    await note.save();

    return res.status(200).json({ msg: "Note updated successfully!", note });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

//delete note by id

const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findOneAndDelete({
      createdBy: req.user.userId,
      _id: id,
    });

    if (!deletedNote) {
      return res.status(404).json({ msg: "Note not found or Invalid id" });
    }

    return res
      .status(200)
      .json({ msg: "Note deleted successfully!", deletedNote });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msg: "Internal server error" });
  }
};

module.exports = {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
};
