const fs = require('fs');
fs.writeFileSync('notes.txt', 'My name is Gary!');

// Append a message to notes.txt
fs.appendFileSync('notes.txt', '\nI am 44 years of age.');