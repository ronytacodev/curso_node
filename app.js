const numbers = [1,2,3,4,5]

numbers.forEach(number => console.log('\x1b[36m%s\x1b[0m',number*2))
// console.log('\x1b[36m%s\x1b[0m', 'I am cyan');
// Semantic versioning: MAJOR.MINOR.PATH

// const chalk = require('chalk')
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
