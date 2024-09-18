// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  let licenseBadge = '';
  // Check which license is passed in and assign the corresponding badge
  if (license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else {
    licenseBadge = '';
  }
  return licenseBadge;
}

//renders links 
function renderLicenseSection(license) {
  // Render the license section with the corresponding license link
  function renderLicenseSection(license) {
    let licenseLink = '';
    // Check which license is passed in and assign the corresponding link
    if (license === 'MIT') {
      licenseLink = '[MIT License](https://opensource.org/licenses/MIT)';
    } else if (license === 'Apache 2.0') {
      licenseLink = '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)';
    } else if (license === 'GPL 3.0') {
      licenseLink = '[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
      licenseLink = '';
    }
    return licenseLink;
  }

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