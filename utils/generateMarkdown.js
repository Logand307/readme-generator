


// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// function below returns license badge and link, and returns empty string if there is none
function renderLicenseLink(license, username, title) {
    if (license === 'None') {
        return "";
    }
    return `[![Github license](https://img.shields.io/badge/license-${license}-blue.svg)](https://github.com/${username}/${title})`;
}

// // TODO: Create a function to generate markdown for README
//***This function uses template literals to take the user input from index.js and generate the markdown that includes the readme file. ***/
function generateMarkdown(data) {
    return `
# Project Title
${data.title}
# Description
${data.description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
# Installation
${data.installation}
# Usage
${data.usage}
# License 
${data.license}
${renderLicenseLink(data.license, data.username, data.title)}
* Please contact me if another license needs to be added that is not available within this list. 
# Contributing 
${data.contribution}
# Tests
${data.tests}
# Questions
* GitHub Username: 
${data.username}
[Link to Github Profile](https://github.com/${data.username})
* Contact Email: 
${data.email}
`;
}

//This exports the generateMarkdown function 
module.exports = generateMarkdown;
