const router = require('express').Router();
const { v4: uuid } = require('uuid');

const { readNotes, writeNotes } = require('../util/util');

router.get('/notes', (_req, res) => {
	res.json(readNotes());
});

router.post('/notes', (req, res) => {
	const { title, text } = req.body;

	const note = {
		title,
		text,
		id: uuid()
	};

	let notes = readNotes();

	notes.push(note);

	writeNotes(notes);

	res.status(200).send();
});

router.delete('/notes/:id', (req, res) => {
	const { id } = req.params;

	let notes = readNotes();

	notes = notes.filter((note) => note.id !== id);

	writeNotes(notes);

	res.status(200).send();
});

module.exports = router;
