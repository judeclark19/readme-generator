const inquirer = require("inquirer");
const fs = require("fs");
const documentGenerator = require("./documentGenerator.js");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Author",
    message: "Enter author's (your) name:",
  },
  {
    type: "input",
    name: "Title",
    message: "Enter a title for your ReadMe:",
  },
  {
    type: "input",
    name: "Description",
    message: "Enter a description for your ReadMe:",
  },
  {
    type: "input",
    name: "Installation",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "Usage",
    message: "Enter usage instructions:",
  },
  {
    type: "checkbox",
    name: "License",
    message: "Choose a license for your ReadMe:",
    choices: [
      "Mozilla Public License",
      "Apache",
      "MIT",
      "Boost Software License",
      "Unilicense",
    ],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Enter instructions for contributing to your project:",
  },
  {
    type: "input",
    name: "Tests",
    message: "Enter testing information for your application:",
  },
  {
    type: "input",
    name: "Questions",
    message: "Enter email address where you can be reached with questions:",
  },
];

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((userInput) => {
    //   console.log(userInput);
      fs.writeFile("GeneratedReadMe.md", documentGenerator(), function (err) {
        if (err) throw err;
        console.log("New file successfully written.");
      });
    })
    .catch((err) => {
      if (err) throw err;
    });
}

// function call to initialize program
init();
