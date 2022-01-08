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
//function to generate the markdown here

function generateMarkdown(data) {
    return `
# Project Title
${data.title}
# Description
${data.description}
# Table of Contents 
* [Installation](#-Installation)
* [Usage](#-Usage)
* [License](#-Installation)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-Information)
    
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
# Contact Information 
* GitHub Username: 
${data.username}
* Contact Email: 
${data.email}
`;
}

//need to export the generateMarkdown function 
module.exports = generateMarkdown;
