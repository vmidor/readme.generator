// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
//const questions = [];
const createReadme = response => ` 
# ${response.title}

![APM](https://img.shields.io/badge/licence-${response.license}-blue)
## Description
  💡 ${response.description} 

## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [License](#license)
   - [Questons](#questions)

## Installation 
  What command is needed to install necessary dependencies?
   📀 ${response.instructions}

## Usage
  🖥 ${response.usage}

## License
  The application is licensed by ${response.license} license

## Questions
📧 Please email me at <${response.email}>.  Check my work at [${response.git}](https://github.com/${response.git}/README-Generator).
    `

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?'

        },
        {
            type: 'input',
            name: 'description',
            message: 'Write description of your project:'

        },
        {
            type: 'input',
            name: 'instructions',
            message: 'What are the installation process if any?'

        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project for?'

        },

        {
            type: 'list',
            name: 'license',
            message: 'What type of license will be used for this project?',
            choices: ['Mozilla', 'Apache', 'MIT', 'GNU']
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email: '

        },
        {
            type: 'input',
            name: 'git',
            message: 'Please enter your GitHub username: '

        },
    ])
    .then(response => {
        fs.writeFile('README.md', createReadme(response)
            , (err) =>
                err ? console.log(err) : console.log("README generated")
        )
    })
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
