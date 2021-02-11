// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0') {
    return `
  [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]
  `
  } else if (license == 'MIT') {
    return `
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
  `
  } else if (license == 'GNU GPL v3') {
    return `
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]
  `} else if (license == 'ISC') {
    return `
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]
  `} else if (!license) {
    return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache 2.0') {
    return `
  (https://opensource.org/licenses/Apache-2.0)
  `
  } else if (license == 'MIT') {
    return `
  (https://opensource.org/licenses/MIT)
  `
  } else if (license == 'GNU GPL v3') {
    return `
  (https://www.gnu.org/licenses/gpl-3.0)
  `
  } else if (license == 'ISC') {
    return `
  (https://opensource.org/licenses/ISC)
  `
  } else if (!license) {
    return '';
  };
}
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (!license) {
      return '';
    } else {
      return `
      ### License

      ${renderLicenseLink(license)}
      `;
    }
  }

  const generateInstall = installation => {
    if (!installation) {
      return '';
    } else {
      return `
      ### Installation

      ${installation}
      `;
    }
  }

  const generateUsage = usage => {
    if (!usage) {
      return '';
    } else {
      return `
      ### Usage

      ${usage}
      `;
    }
  }
  const generateContribution = contribution => {
    if (!contribution) {
      return '';
    } else {
      return `
      ### Contribution

      ${contribution}
      `;
    }

  }
  const generateTest = test => {
    if (!test) {
      return '';
    } else {
      return `
      ### Test

      ${test}
      `;
    }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}              ${renderLicenseBadge(data.license)}

  ### Table of Contents

  ### Description

${data.description}

${generateInstall(data.installation)}

${generateUsage(data.usage)}

${generateContribution(data.contribution)}

${generateTest(data.test)}

${renderLicenseSection(data.license)}
`;
}



module.exports = generateMarkdown;
