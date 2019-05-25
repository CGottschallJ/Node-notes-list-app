// -- MODULE IMPORTS -- //
const fs = require('fs');

// -- PACKAGE IMPORTS -- //
const chalk = require('chalk');

// ------ EXPORT FUNCTIONS ------ //

// Creating a function that will add a note
const addNote = (title, body) => {

	// -> Loading the existing notes into a variable using the loadNotes() function
	const existingNotes = loadNotes();

	// -> Checking to see if any notes already exist with the same name by finding in the existing note array.
	const duplicateNote = existingNotes.find(note => note.title === title)

	// -> Saving the notes if there are no duplicates
	if (!duplicateNote) {
		const newNotes = [...existingNotes, { title, body }];
		saveNotes(newNotes);
		console.log(chalk.green.bold('New note saved successfully!'));
	} else {
		// -> Throwing a console error if a duplicate note already exists
		console.log(chalk.red.bold('Error: A note with this title already exists.  Please try another name!'));
	}

}

// Creating a function that will remove a note
const removeNote = (title) => {

	// -> Loading the existing notes into a variable with the loadNotes() function
	const existingNotes = loadNotes();

	// -> Setting the new notes variable to an array of all notes which titles DO NOT match the title passed in.
	const newNotes = existingNotes.filter(note => note.title !== title);

	// -> If the newNotes length is different than the existing notes, save the newNotes variable.
	if (newNotes.length !== existingNotes.length) {
		saveNotes(newNotes);
		console.log(chalk.green.bold('The note has been removed.'));
	} else {

		// -> If newNotes and existingNotes are the same length, then the note does not exist. throwing error.
		console.log(chalk.red.bold('Error: That note does not exist. Please try another note title.'))
	}

}

// Creating a function that will list out all saved notes
const listNotes = () => {

	// Loading the notes into a variable using the loadNotes() function
	const existingNotes = loadNotes();

	// Logging a message to the console
	console.log(chalk.blue.bold('Saved Notes'));

	// Printing the name of each saved note to the console
	existingNotes.forEach(note => {
		console.log(chalk.green(note.title));
	});
}

// Creatinf a function that will retrieve a single note
const readNote = (title) => {

	// Loading the notes into a varaiable using the loadNotes() function.
	const existingNotes = loadNotes();

	// Finding the existing note with the same title as the title passed in.
	const selectedNote = existingNotes.find(note => note.title === title);

	// If the selected note exists then print out the title and the body.
	if (selectedNote) {
		console.log(chalk.inverse(selectedNote.title));
		console.log(chalk.white(selectedNote.body));
	} else {
		// If the selected note does not exist, alert an error.
		console.log(chalk.red.bold('Error: There are no notes with that title. Please try the \'list\' command or another title.'));
	}
}

// ------ END EXPORT FUNTIONS ------ //

// ------ UTITLITY FUNCTIONS ------ // 

// Creating a funciton to save the notes
const saveNotes = (notes) => {

	// -> Converting the notes object into a JSON string
	const notesToJSON = JSON.stringify(notes);

	// -> Writing the notes to the notes.json file
	fs.writeFileSync('notes.json', notesToJSON);
}

// Creating a function to load the existing notes
const loadNotes = () => {

	// -> Trying this block of code and checking for an error
	try {

		// -> Saving the notes binary to a variable
		const notesBuffer = fs.readFileSync('notes.json');

		// -> Converting the notes binary into a JSON string
		const notesJSON = notesBuffer.toString();

		// -> Parsing the JSON data into a JavaScript object
		return JSON.parse(notesJSON);

	} catch (error) {

		// -> Catching any errors
		return [];
	}

}

// ------ END UTILITY FUNCTIONS ------ //



// setting what should be exported from this file with module.exports.
module.exports = {
	addNote,
	removeNote,
	listNotes,
	readNote
}