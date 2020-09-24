function documentGenerator (userInput) {
    return `
    
# ${userInput.Title}

## Description
${userInput.Description}
***

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

***

## Installation
${userInput.Installation}

## Usage
${userInput.Usage}

## Credits
${userInput.Credits}

## License
${userInput.License}

## Contributing
${userInput.Contributing}

## Tests
${userInput.Tests}

## Questions
Please reach out to ${userInput.Author} at ${userInput.Questions}.
    
    `;
}


module.exports = documentGenerator