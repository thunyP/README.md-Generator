// TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
    return '[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)'
    case "Apache-2.0":
    return '[![Apache 2.0 License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)'
    case "GPL-3.0":
    return '[![GPL v3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    case "BSD-3-Clause":
    return '[![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)'
      // If there is no license, return an empty string
    case "None":
    return ''
  }
}

//renders links 
function renderLicenseSection(license) {
  switch (license){

    case "MIT":
    return `## License
    link:'https://opensource.org/license/mit'
    `

    case "GPL-3.0":
    return `## License 
    link: https://www.gnu.org/licenses/gpl-3.0.en.html
    `
    
    case "Apache-2.0":
    return `## License
    link: https://apache.org/
    `

    case "BSD-3-Clause" :
    return`## License
    link: https://opensource.org/license/bsd-3-clause
    `
    
    case "None":
    return `## License 
    link: `
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