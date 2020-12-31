const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return chalk.white.inverse('Your notes...');
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function (note) {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse('new note added'));
    } else {
        console.log(chalk.red.inverse('note title taken'));
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }

}

const removeNote = function (title) {
    const notes = loadNotes();

    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });



    if (notes.length !== notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed successfully'));
        saveNotes(notesToKeep);//save the note after removing
    } else {
        console.log(chalk.red.inverse('There is no note with that title'));
    }

}

//export all the functions from this file
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};