# team_profile_generator
Week 12 Challenge Team Profile Generator
# Module 12 Object-Oriented Programming: Team Profile Generator

![NPM License](https://img.shields.io/badge/license-MIT-red)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)]

## Description
I wanted to create a team profile html generator using ES6 and Node.js.
The app enables the user to create a development team by using prompt questions and using node.js to render those questions to a newly created, or updated, html file.
I reinforced last week's learning on how to use Node.js, fs and inquirer. I learned new concepts and put them into use, namely how to use ES6 classes in JavaScript and some basics of test driven development.

## Installation
The app is run from within the JavaScript file. The user should open the integrated terminal and use the command 'node index.js' or simply 'node index'.
There are no other installation requirements.

## Usage
When the user enters 'node index.js' a series of prompt questions is displayed on screen in the integrated terminal.

In the development of the app, I ran tests using "npm run test" after adapting the files Employee.js, Engineer.js, Intern.js and Manager.js Once these had passed I took a screenshot to show that this had been achieved. The screenshot is here:
![Screenshot](./team_profile_generator_screenshot.png)

Once the user has completed answering all the questions, the team.html file is automatically generated.

## License
I selected the MIT license for this app.

## Badges
Two badges have been added, one for the contributor covenant, the other for the MIT license.

## How to Contribute
Other developers are welcome to contribute. For this, I have included the Contributor Covenant.
![Contributor Covenant](https://www.contributor-covenant.org/)
Developers wishing to report problems can email me on philculling@hotmail.com.

END OF REAL README. Delete this line and everything below.

NOTES
The render function that is referred to in the instructions is page-template.js.

TO DO LIST
Try to work out the final part: linking to page-template and rendering the html.
If it's not going to the team.html file in the output folder, you will need to adapt some of the README above.
Check submission requirements.

## Instructions
  * Call the `render` function (provided for you) and pass in an array containing all employee objects; 
    * The `render` function will generate and return a block of HTML including templated divs for each employee!
  * Create an HTML file using the HTML returned from the `render` function. 
    * Write it to a file named `team.html` in the `output` folder. 
    * You can use the provided variable `outputPath` to target this location.

## Hints  
* You may need to check if the `output` folder exists and create it if it does not. Done, but does everything link ok?

## Review

You are required to submit the following for review:

* A sample HTML file generated using your application.

* The URL of the GitHub repository, with a unique name and a readme describing the project.