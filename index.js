const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/readme-template');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        }
    ])
    .then(answers =>  console.log(answers));