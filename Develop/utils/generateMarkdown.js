// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
//ask for help 
}

//renders links 
function renderLicenseSection(license) {
  
//ask for help
}
//calls everything from above realting to badge and link of licesne on line 46
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Features](#features)
* [Usage](#usage)
* [Dependencies](depenedencies)
* [Testing](#testing)
* [Questions](#questions)

## Screenshot
![alt-text](${data.screenshot})

## Install
${data.dependencies}

## Testing
${data.test}

## Contributers
${data.contributers}

## Questions
### Contact Info
* email: ${data.email} 
* [github/${data.username}](https://github.com/${data.username}).
`;
}

export default generateMarkdown;