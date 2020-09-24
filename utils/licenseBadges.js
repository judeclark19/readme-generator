function licenseBadges(userInput) {
  if (userInput.License == "Mozilla Public License") {
    console.log("user selected MPL");
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (userInput.License == "Apache") {
    console.log("user selected Apache license");
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (userInput.License == "MIT") {
    console.log("user selected MIT license");
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
} else if (userInput.License == "Boost Software License") {
    console.log("user selected Boost license");
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
} else if (userInput.License == "Unlicense") {
    console.log("user selected Unlicense");
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  } else {
    console.log("Unknown License");
  }
}

module.exports = licenseBadges;


// "Boost Software License",
// "Unilicense",
