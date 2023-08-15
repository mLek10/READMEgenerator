const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for information
inquirer
  .prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Add table of contents:',
      },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage examples:',
      }, 
    {
        type: 'input',
        name: 'credits',
        message: 'Enter collaborators or third party assets:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Choose a license:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter examples on how to run tests:',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'Enter guidelines for contributing:',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Enter email:',
      },
  ])