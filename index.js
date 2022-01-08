
// TODO: Include packages needed for this application

const inquirer = require('inquirer'); //installed via npm inquirer - this allows for the question input below.
const fs = require('fs'); //this allows for the writeToFile function at the bottom of index.js, without this that function would not work
const generateMarkdown = require("./utils/generateMarkdown"); //this required our generateMarkdown that uses template literals to display the data below on our generated file.

// TODO: Create an array of questions for user input using inquirier
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You need to enter a project title!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project.',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What installation instructions would the user need?',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('You need to enter installation instructions!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please advise additional information for usage.',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('You need to enter information for usage!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Who are the contributors to this project?',
      validate: contributionInput => {
        if (contributionInput) {
          return true;
        } else {
          console.log('You need to enter project contributors!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your application.',
      choices: [
        "MIT",
        "Mozilla",
        "Open"
    ]
    },
    {
      type: "input",
      name: "tests",
      message: "Is there a test included?",
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log('You need to enter any tests that are included!');
          return false;
        }
      }
      
  },
  {
      type: "input",
      name: "questions",
      message: "What do I do if I have a question or concern? ",
      validate: questionsInput => {
        if (questionsInput) {
          return true;
        } else {
          console.log('You need to advise user on what to do if they have questions!');
          return false;
        }
      }
  },
  {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: ",
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('You need to enter your github username!');
          return false;
        }
      }
  },
  {
      type: "input",
      name: "email",
      message: "Please enter your email address: ",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('You need to enter your email address!');
          return false;
        }
      }
  },
];




// // TODO: Create a function to write README file
//*** This function uses file system to write the data, take input from generateMarkdown file and create a ReadMe file within the "generated" folder ***/
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), function (err) {
      if (err) {
          return console.log(err);
      }
  });
}

// // TODO: Create a function to initialize app
//*** This function will allow the questions to be presented to the user ***/
function init() {
  inquirer.prompt(questions).then((data) => {
      writeToFile("./generated/README.md", data);
  });
}

// // Function call to initialize app
init();

