// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
console.log(inquirer);
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt ([
    {
        type: 'input',
        name: 'title',
        message: 'What is your title for your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter your projects title?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your Project?',
    },
   
{
        type: 'input',
        name: 'installation',
        message: 'What do you need for the installation of your project?',

},
{
        type: 'input',
        name: 'usage',
        message: 'How is it supposed to be used?',
},
{
        type: 'input',
        name: 'contributing',
        message: 'Who contributed in your project?',

},
{
        type: 'input',
        name: 'test',
        message: 'Provide examples of your tests?'
},
{
        input: 'input',
        name: 'questions',
        message: 'What is your Github username?'
},
{
        input: 'input',
        name: 'email',
        message: 'What is your email address?'
},
{
        type: 'list',
        name: 'license',
        message: 'Which license did you use from the following',
        choices: ['MIT', 'Apache', 'BSD', 'None']

}
    ]) 
}
const writeToFile = (fileName, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileName, err => {
            if (err) {
                reject(err);
                return;
         }
             resolve({
                 ok: true,
                 message: 'ReadMe File created!'
             });
        });
    });
};

// TODO: Create a function to initialize app
function init() {   
    inquirer.prompt
    questions()
    .then(data => {
        console.log(data);
        const readme = generateMarkdown(data);
        writeToFile(readme)
    })
}

// Function call to initialize app
init();
