// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

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
* [Questions](#contact-information)
    
# Installation
${data.installation}
# Usage
${data.usage}
# License 
${data.license}
* Please contact me if another license needs to be added that is not available within this list. 
# Contributing 
${data.contribution}
# Tests
${data.tests}
# Questions
* GitHub Username: 
${data.username}
* Contact Email: 
${data.email}
`;
}

//need to export the generateMarkdown function 
module.exports = generateMarkdown;
