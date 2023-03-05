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

//empty array to build team, gets passed into render function later
const team = [];
//function to add manager
const addManager = () => {
    return (
inquirer.prompt(
    [
        {
            type: 'input',
            message: "Name of team manager?",
            name: "name",
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
    ]
).then(answers => {
    const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
    );
    team.push(manager);
    addEmployee();
})
);
};

const addEngineer = () => {
    return (
        inquirer.prompt([
            {
                type: "input",
                message: "Name of Engineer?",
                name: "name",
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
                message: "Github username?",
                name: "github",
            }
        ])
        .then((answers) => {
            const engineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.github
            );
            team.push(engineer);
            addEmployee();
        })
    );
};

const addIntern = () => {
    return (
        inquirer.prompt([
            {
                type: "input",
                message: "Name of Intern?",
                name: "name",
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
                message: "Intern's school?",
                name: "school",
            }
        ])
        .then((answers) => {
            const intern = new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.school
            );
            team.push(intern);
            addEmployee();
        })
    );
};

const addEmployee = () => {
    return (
        inquirer.prompt([
            {
                name: "employee",
                type: "list",
                message: "Please confirm if adding Engineer, Intern or if you have finished adding to the team.",
                choices: ["Engineer", "Intern", "I have finished adding to the team,"],
            },
        ])
    .then((chosen) => {
       switch (chosen.employee) {
        case "Engineer":
            addEngineer();
            break;
        case "Intern":
            addIntern();
            break;
        default:
            startHtml();
       }
    })
    );
};
function startHtml() {
    const dom = generateTeam(team);
    fs.writeFile("index.html", dom, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

function init() {
    addManager();
};

init();