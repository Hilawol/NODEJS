const fs = require('fs');

//1. Create a new txt file 
fs.writeFileSync('notes.txt', "This file was created by Hila and Node.js");

// /2. Create a copy of the newly created.
fs.copyFileSync('notes.txt', 'notes-copy.txt');

//3. Rename one of the files using a method from the fs module.
fs.renameSync('notes.txt', 'notes-original.txt')

//4. Get a list of all the file names of the current directory using a method from the fs module.
fs.readdirSync('./').map(f => console.log(f));

//5. Find out and implement another method for the fs module.
//Reads the content of the file 'notes-original.txt'
console.log(fs.readFileSync('notes-original.txt', 'utf8'));