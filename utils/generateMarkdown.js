
module.exports = generateMarkdown;


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  
   if(license === 'MIT') {
       return `
       ![NPM](https://img.shields.io/npm/l/inquirer.svg)
        `
     } else if (license === 'Apache') {
         return `
         ![AUR license](https://img.shields.io/aur/license/android-studio.svg)
         `
   } else if(license === 'BSD') {
       return `
       ![PyPI - License](https://img.shields.io/pypi/l/OpenBSD?logo=BSD.svg)
    `
   } else if(license === 'None') {
       return `
       " "
       `
    
     }     
     return license;
   }  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    
   if(license === 'MIT') {
       return `     
* This project is licensed under MIT license and the link is below.
* https://choosealicense.com/licenses/mit/
       `
      } else if (license === 'Apache') {
          return `
* This project is licensed under Apache license and the link is below.
* https://www.apache.org/licenses/LICENSE-1.0
          `
    } else if(license === 'BSD') {
        return `
* This project is licensed under BSD license and the link is below.
* https://www.openbsd.org/policy.html
        `
    } else if(license === 'None') {
        return `     `
      }       
      return license;
   
    
    }  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}  ${renderLicenseBadge(data.license)}

## Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)
 

## Description 
* ${data.description}


## Installation
* ${data.installation}

## Usage
* ${data.usage}

## Contributing
* ${data.contributing}


## Tests
* ${data.test}

## Questions
* I have added my email and Github link feel free to contact me for
any questions or any ideas of improvements.
* ${data.email}
* <a class href="https://github.com/${data.questions}">Github Link</a>
* ${data.questions}

## License
${(renderLicenseLink(data.license))}
`;
}



