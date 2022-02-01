module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
          }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

module.exports = MarkData => {
  const {Markdown,Mark, title, description, installation,email,instructions, usage, contributing, test, questions, License, badge, ... header} = MarkData;
return `
# ${title}

## Table of Contents:
* <a href="#description">Description</a>
* <a href="#installation">Installation</a>
* <a href="#usage">Usage</a>
* <a href="#contributing">Contributing</a>
* <a href="#test">Tests</a>
* <a href="#questions">Questions</a>
* <a href="#license">License</a>
 ${generateDescription(description)}
 ${generateInstallation(installation)}
 ${generateUsage(usage)}
 ${generateContributing(contributing)}
 ${generateTest(test)}
 ${generateQuestions(questions)}
* ${email}
* I have added my email and Github link feel free to contact me. Either with 
any questions or any ideas of improvements. Thank you.
`;
  };
  function generateMarkdown(Markdata) {
    return `
    ## License
    * License Badge:
    
    
        `;
    
    };


const generateDescription = descriptionText => {
    if(!descriptionText) {
        return '';
    }
    return `  
## Description
* ${descriptionText}
    
    `;
};

const generateInstallation = installationText => {
    if(!installationText) {
        return '';
    }
    return `
## Installation
* ${installationText}
    `;
};

const generateUsage = UsageText => {
    if(!UsageText) {
        return '';
    }
    return `
## Usage
* ${UsageText}
    `;
};

const generateContributing = contributingText => {
    if(!contributingText) {
        return '';
    }
    return `
## Contributing
* ${contributingText}
  
    `;
};

const generateTest = testText => {
    if(!testText) {
        return '';
    }
    return `
## Test
* ${testText}
    `;
};

const generateQuestions = (questionsText)  => {
    return `
## Questions
* <a class href="https://github.com/${questionsText}">Github Link</a>

`;
};