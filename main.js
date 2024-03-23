import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random()) * 6 + 1;
const answers = await inquirer.prompt([
    {
        name: "userguessedNumber",
        type: "number",
        message: "please select a number between 1 - 6 ",
    },
]);
if (answers.userguessedNumber === randomNumber) {
    console.log("Congratulation your select correct number");
}
else {
    console.log("You guess wrong number");
}
