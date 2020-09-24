const licenseBadges = require("./licenseBadges");

function documentGenerator (userInput) {
    return `
    
# ${userInput.Title}

## Description
${userInput.Description}
***

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

***

## Installation
${userInput.Installation}

## Usage
${userInput.Usage}

## License
${licenseBadges(userInput)}

## Contributing
${userInput.Contributing}

## Tests
${userInput.Tests}

## Questions
Please reach out to ${userInput.Author} at ${userInput.Questions}.
    
    `;
}


module.exports = documentGenerator