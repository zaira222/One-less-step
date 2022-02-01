const fs = require('fs');

module.exports = generateMarkdown;
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}  ${data.license}

## Table of Contents:
* <a href="#description">Description</a>
* <a href="#installation">Installation</a>
* <a href="#usage">Usage</a>
* <a href="#contributing">Contributing</a>
* <a href="#test">Tests</a>
* <a href="#questions">Questions</a>
* <a href="#license">License</a>
 

## Description 
* ${data.description}


## Installation
* ${data.installation}

## Usage
* ${data.usage}

## Contributing
* ${data.contributing}


## Test
* ${data.test}

## Questions
* I have added my email and Github link feel free to contact me. Either with 
any questions or any ideas of improvements.
* ${data.email}
* <a class href="https://github.com/${data.questions}">Github Link</a>


## License
* License Badge:
* License used:
${data.license}


`;
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
     var badge = ""
    if(license === 'MIT') {
       badge = !("https://img.shields.io/badge/license-MIT-green/node.svg")
      } else if (license === 'Apache') {
       badge = !("https://img.shields.io/badge/license-Apache-blue/node.svg")
    } else if(license === 'BSD') {
       badge = !("https://img.shields.io/badge/license-BSD-green/node.svg")
    } else if(license === 'None') {
         badge = ('')
      }     
      return badge;
    }  
   
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    var link = ''
    if(license === 'MIT') {
        link = !("https://choosealicense.com/licenses/mit/")
       } else if (license === 'Apache') {
        link = !("https://www.apache.org/licenses/LICENSE-1.0")
     } else if(license === 'BSD') {
        link = !("https://www.openbsd.org/policy.html")
     } else if(license === 'None') {
        link = ('')
       }     
       return link;
     }  




