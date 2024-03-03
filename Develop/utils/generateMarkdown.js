// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  };
  return licenseBadges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 const lincenseLinks ={
  'MIT': 'https://opensource.org/licenses/MIT',
 };
  return lincenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  const lincenseLink = renderLicenseLink(license);
  return `## License
  This project is licensed under the [${license} License](${lincenseLink}).`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseSection = renderLicenseSection(data.license);
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}
  ${licenseBadge}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  ${licenseSection}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}

`;
}

module.exports = generateMarkdown;
