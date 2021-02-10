const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'installConfirm',
            message: 'Would you like to include installation instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions.',
            when: ({installConfirm}) => installConfirm
        },
        {
            type: 'confirm',
            name: 'usageConfirm',
            message: 'Would you like to include usage information?',
            default: true
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage information.',
            when: ({usageConfirm}) => usageConfirm
        },
        {
            type: 'confirm',
            name: 'contributionConfirm',
            message: 'Would you like to include contribution guidelines?',
            default: true
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide contribution guidelines.',
            when: ({contributionConfirm}) => contributionConfirm
        },
        {
            type: 'confirm',
            name: 'testConfirm',
            message: 'Would you like to include test instructions?',
            default: true
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide test instructions',
            when: ({testConfirm}) => testConfirm
        },
        {
            type: 'confirm',
            name: 'licenseConfirm',
            message: 'Would you like to select a license?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Which license is your application covered under?',
            choices: ['MIT', 'ISC', 'Apache 2.0', 'GNU GPLv3'],
            when: ({licenseConfirm}) => licenseConfirm
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your Github Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your e-mail address!');
                    return false;
                }
            }
        }
    ]);
};

promptUser().then(data =>  {
    const markDown = generateMarkdown(data);

    fs.writeFile('README.md', markDown, err => {
        if (err) throw err;
    
        console.log('README complete! Check out README.md to see the output!');
    });

})




// const printProjectData = (projectDataArr) => {
//     projectDataArr.forEach(projectItem => console.log(projectItem));
// }

// printProjectData(projectDataArgs);















// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();