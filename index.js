const inquirer = require('inquirer');
const fs = require('fs');

// Prompt user for information
inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter your project title:',
            validate: function (input) {
                if (!input) {
                    return 'Project title is required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description:',
            validate: function (input) {
                if (!input) {
                    return 'Description is required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
            validate: function (input) {
                if (!input) {
                    return 'Installation instructions required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage examples:',
            validate: function (input) {
                if (!input) {
                    return 'Usage examples required';
                }
                return true;
            },
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
            validate: function (input) {
                if (!input) {
                    return 'License is required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter guidelines for contributing:',
            validate: function (input) {
                if (!input) {
                    return 'Contributing guidelines required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter examples on how to run tests:',
            validate: function (input) {
                if (!input) {
                    return 'Test examples required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username:',
            validate: function (input) {
                if (!input) {
                    return 'GitHub username required';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
            validate: function (input) {
                if (!input) {
                    return 'E-mail is required';
                }
                return true;
            },
        }
    ])
    .then((answers) => {
        // Generate the README content
        const licenseBadge = `![License](https://img.shields.io/badge/License-MIT-blue.svg)`;

        const readmeContent = `
# ${answers.projectTitle}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseBadge} This project is licensed under the MIT License.

## Contributing
${answers.contribute}

## Tests
${answers.tests}

## Questions
For any questions, feel free to reach out to me through [GitHub](https://github.com/${answers.githubUsername}) or by email at ${answers.email}.
    `;

        // Write the content to a README file
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) throw err;
            console.log('README.md file has been generated!');
        });
    })
    .catch((error) => {
        console.error(error);
    });