
// -- PACKAGE IMPORTS -- //
const chalk = require('chalk');
const yargs = require('yargs');

// -- FILE IMPORTS -- //
const notes = require('./notes.js');

// -- MODULE IMPORTS -- //
const fs = require('fs');

// Create add command
yargs.command({
	// defining the keyword which will run this command
	command: 'add',
	// creating a description for this command
	describe: 'Add a new note',
	// defining the options (flags) this command will support
	builder: {
		title: {
			describe: 'Title of the note', // Giving a description for the title argument
			demandOption: true, // Setting the title to required when the add command is run
			type: 'string', // Setting the value of the title to a string.
		},
		body: {
			describe: 'The body of the note',
			demandOption: true,
			type: 'string',
		}
	},
	// defining the function that will run when this command is run.
	// -- Takes in argv where the options are stored.  They can then be accessed inside of the function.
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	}
});

// Create remove command
yargs.command({
	command: 'remove',
	describe: 'Remove a note',
	builder: {
		title: {
			describe: 'The title of the note to be removed',
			demandOption: true,
			type: 'string',
		}
	},
	handler(argv) {
		notes.removeNote(argv.title);
	}
});

// Create read command
yargs.command({
	command: 'read',
	describe: 'Read a note',
	builder: {
		title: {
			describe: 'The title of the note that you wish to view',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		notes.readNote(argv.title);
	}
});

// Creating list command
yargs.command({
	command: 'list',
	describe: 'See a list of all notes',
	handler() {
		notes.listNotes();
	}
});

yargs.parse(); // Parses all of the arguments.  If this was not here, yargs would not know that it needs to parse the arguments.

