#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Display message
console.log(chalk.blue("\t============================"))
console.log(chalk.cyanBright(chalk.bold("\tWELLCOME TO SAMAN WORD COUNTER")));
console.log(chalk.blue("\t============================\n"))

// Ask user to enter sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.blueBright("Enter your sentence to count the word "),
    }
]);

let words = answers.sentence.trim().split(" ");

// Analysis of user input sentence
console.log("*".repeat(60));
console.log(chalk.bold.magentaBright("- Sentence Words:"));
console.log(words);
console.log(chalk.bold.magenta(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("*".repeat(60));