// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const content= "\nThis is line is added to sample.txt";

fs.writeFile('sample.txt', content, { flag: 'a+' }, (err) => {
    if(err) throw err;
});


for(let i=0; i<10000000000; i++);