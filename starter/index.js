const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt(
    [
        {
            type: 'input',
            message: "Name of team manager?",
            name: "manager",
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Email address?",
            name: "email",
        },
        {
            type: "input",
            message: "Office number?",
            name: "officeNumber",
        },
        {
            type: 'list',
            message: "Would you like to",
            name: "choose next team member",
            choices: ['add an engineer?', 'add an intern?', 'finish creating your team?'],
        },
    ]
)