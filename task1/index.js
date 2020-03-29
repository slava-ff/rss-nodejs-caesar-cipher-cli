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
