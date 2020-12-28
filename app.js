const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');


const { argv, string } = require('yargs');







//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demand: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demand: true,
            type: 'string'
        }
    },
    handler: function () {
        notes.addNote(argv.title, argv.body);
    }
})









//remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})







//list command
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function () {
        console.log('Listing your notes...')
    }
})







//read command
yargs.command({
    command: 'read',
    describe: 'read the notes',
    handler: function () {
        console.log('read notes');
    }
})




//add,remove,read,list notes


yargs.parse();

