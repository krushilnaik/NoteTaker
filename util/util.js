const path = require('path');
const fs = require('fs');

function readNotes() {
	return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'db', 'db.json')));
}

function writeNotes(notes) {
	fs.writeFileSync(
		path.join(__dirname, '..', 'db', 'db.json'),
		JSON.stringify(notes, null, '\t')
	);
}

module.exports = {
	readNotes,
	writeNotes
};
