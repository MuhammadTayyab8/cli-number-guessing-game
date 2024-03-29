#!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

let attemptsLeft = 5; // You can adjust the number of attempts as needed
let secretNumber = Math.floor(Math.random() * 30 + 1);
let correct = false;

async function playGame() {
    console.log(chalk.yellow("\nWelcome to the Guessing Game!\n"));
    console.log(chalk.greenBright(`Guess the secret number between 1 and 30. You have ${attemptsLeft} attempts.\n`));

    while ((attemptsLeft > 0) && (!correct)) {
        const guess = await inquirer.prompt({
            name: "number",
            type: "number",
            message: `Attempts left: ${attemptsLeft}. Enter your guess:`,
        });

        if (guess.number === secretNumber) {
            console.log(chalk.green("Congratulations! You guessed the secret number!"));
            correct = true;
        } else if (guess.number < secretNumber) {
            console.log(chalk.blue("Too low. Try again.\n"));
        }  else if(guess.number > secretNumber){
            console.log(chalk.yellow("Too high. Try again.\n"));
        }
        else{
        console.log("Please enter a valid number.\n");
        }
        attemptsLeft--;
    }

    // If the user fails to guess the number within attempts
    if (!correct) {
        console.log(chalk.red("Sorry, you've run out of attempts. The secret number was:", secretNumber));
    }
}

// Start the game
playGame();
