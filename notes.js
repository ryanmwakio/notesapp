const fs = require('fs');

const getNotes = () => {
    return 'Your notes...'
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
        console.log('new note added');
    } else {
        console.log('note title taken')
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

    const noteExists = notes.filter(function (note) {
        return note.title === title;
    })

    if (noteExists === 0) {
        console.log('The note by that title does not exist');
    } else {
        notes.pop({
            title: title,
        })
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};