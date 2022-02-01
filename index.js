// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
console.log(inquirer);
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptquestions = () => {
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
        input: 'input',
        name: 'instructions',
        message: 'Any other Instructions on how others can reach you?'
} 
]);
}

const promptSections = (MarkData) => {
    console.log(`
    ============
    Markdown
    ============
    
    `);
    if(!MarkData.Markdowns) {
        MarkData.Markdowns = [];
    }
    return inquirer.prompt([
        {
            type: 'confirmlicense',
            name: 'badge',
            message: 'Would you like to add a license?',
            default: true
        },

        {
            type: 'list',
            name: 'license',
            message: 'Which license did you use from the following',
            choices: ['MIT', 'Apache', 'BSD', 'None']

        }

    ])
    .then(MarkdownData => {
        MarkData.Markdowns.push(MarkdownData);
        if(MarkdownData.confirmAddMarkdown) {
            return promptSections(MarkData);
        } else {
            return MarkData;
        }
    });
};
    
// TODO: Create a function to initialize app
function init() {    
promptquestions()
    .then(promptSections)
    .then(MarkData => {
        const pagemd = generateMarkdown(MarkData)

     fs.writeFile('./dist/readme.md', pagemd, err => {
       if (err) 
       {
           throw err;
        } console.log("Markdown is complete!");
     });
    })
}
// Function call to initialize app
init();