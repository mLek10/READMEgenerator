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
      name: 'installation',
      message: 'Enter installation instructions:',
    },
  ])