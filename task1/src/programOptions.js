const commander = require('commander');

const program = new commander.Command();

program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <num>', 'a shift')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .requiredOption('-a, --action <action>', 'an action encode/decode');

program.parse(process.argv);

const programOptions = program.opts();

module.exports = programOptions;
