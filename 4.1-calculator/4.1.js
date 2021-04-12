// Write a calculator app that uses yargs.
// Create the following operations: (add, substract, multiply, pow).

const yargs = require('yargs');

yargs.command({
  command: 'add',
  describe: 'Calculates the sum of two numbers',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler: function (argv) {
    console.log(`${argv.num1}+${argv.num2}=${argv.num1 + argv.num2}`);
  },
});

yargs.command({
  command: 'substract',
  describe: 'Calculates the difference between num1 and num2',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler: (argv) => {
    console.log(`${argv.num1}-${argv.num2}=${argv.num1 - argv.num2}`);
  }
});

yargs.command({
  command: 'multiply',
  describe: 'Calculates the product of num1 and num2',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer',
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer',
    },
  },
  handler: (argv) => {
    console.log(`${argv.num1}*${argv.num2}=${argv.num1 * argv.num2}`);
  }
})

yargs.command({
  command: 'pow',
  describe: 'Calculates num1 to the power of num2',
  builder: {
    num1: {
      describe: 'First number',
      demandOption: true,
      type: 'integer'
    },
    num2: {
      describe: 'Second number',
      demandOption: true,
      type: 'integer'
    }
  },
  handler: function (argv) {
    console.log(`${argv.num1}^${argv.num2}=${argv.num1 ** argv.num2}`);
  },
});

yargs.parse();
