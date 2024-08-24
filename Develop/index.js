// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
        //title 
        {
          type: 'input',
          name: 'title',
          message: 'What is your Projects Name?',
        },
        //license
        {
            type: 'checkbox',
            name: 'license',
            message: 'What kind of Liscense is your project using',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None']
        },
        //descrtiption
        {
          type: 'input',
          name: 'description',
          message: 'Write a Short Descirption of your project',
        },
        // NPM i
        {
          type: 'input',
          name: 'dependencies',
          message: 'what command should run to install dependences',
        },
        //Test
        {
            type: 'input',
            name: 'test',
            message: 'what command should run to test dependenies ',
        },
        //contributors
        {
          type: 'input',
          name: 'contributers',
          message: 'who help create this code?',
        },
        //Contact Info
        //Github
        {
          type: 'input',
          name: 'username',
          message: 'What is GitHub Username?',
        },
        //Email
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address',
        }
      
      ];

// // TODO: Create a function to write README file

function writeToFile(fileName, data) {
  try {
      fs.writeFileSync(fileName, data);
  } catch (err) {console.log(err);}
}


// // TODO: Create a function to initialize app

function init() {
  inquirer
      .prompt(questions).then((response) =>
          writeToFile('./product/README.md', generateMarkdown(response))
      )
}
// // Function call to initialize app
init();
