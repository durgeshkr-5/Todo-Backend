const express = require("express");
const { createNote, getNotes, deleteNote, updateNote } = require("../controllers/notes.controller");
const authMiddleware = require("../middlewares/auth.middlewares");


const notesRouter = express.Router();


notesRouter.get("/",authMiddleware, getNotes);
notesRouter.post("/",authMiddleware, createNote);
notesRouter.put("/:id",authMiddleware, updateNote);
notesRouter.delete("/:id",authMiddleware, deleteNote);













module.exports = notesRouter;