const express=require('express');
const noteController = require("../../controllers/note-controller");
const groupController = require("../../controllers/group-controller");
const router = express.Router();

router.get("/allnotes/:id", groupController.getGroupsWithAllNotes);
router.post('/notes', noteController.createNote);
router.get('/groups', groupController.getAllGroups);
router.post('/groups', groupController.createGroup);
module.exports = router