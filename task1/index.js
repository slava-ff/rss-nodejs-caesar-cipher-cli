const through2 = require('through2');
const fs = require('fs');
const caesarCipher = require('./src/caesar-cipher');
const programOptions = require('./src/programOptions');

const cCipher = through2((data, enc, cb) => {
  cb(null, Buffer.from(caesarCipher(data.toString(), +programOptions.shift)));
});

let streamSrc;
let streamDest;

if (!programOptions.input) streamSrc = process.stdin;
else streamSrc = fs.createReadStream(programOptions.input);

if (!programOptions.output) streamDest = process.stdout;
else streamDest = fs.createWriteStream(programOptions.output, { flags: 'a' });

if (programOptions.action === 'decode') programOptions.shift = -programOptions.shift;

streamSrc.pipe(cCipher).pipe(streamDest);


process.on('uncaughtException', error => {
    if (error.errno === -4058) {
        console.error('There is no file with this path');
        process.exit(1);
    }
    else {
        console.error(error);
        process.exit(1);
    }
  })
