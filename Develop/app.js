const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArray = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
askGeneralQuestions = function () {
    inquirer
        .prompt([

            {
                type: "list",
                message: "Wnhat is your role?",
                name: "role",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }

        ]).then(answers => {
            let employeeArray = []
            const employeeRole = answers.role
            switch (employeeRole) {

                case "Manager":
                    askmanagerQuestions()
                    break;

                case "Engineer":
                    askEngineerQuestions();
                    break;

                case "Intern":
                    askInternQuestions();
                    break;
            }

        })
}

askmanagerQuestions = function () {
    inquirer
        .prompt([

            {

                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id number",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"


            },
            {
                type: "input",
                message: "What is your office phone number?",
                name: "officeNumber"
            },
            {
                type: "confirm",
                message: "Would You Like to Add Another Team Member?",
                name: "addAnother"

            }]).then(answers => {
                const employeeName = answers.name
                const employeeId = answers.id;
                const employeeEmail = answers.email
                const employeeRole = answers.role
                const officeNum = answers.officeNumber

                myNewManager = new Manager(employeeName, employeeId, employeeEmail, officeNum)

                employeeArray.push(myNewManager);

                console.log(employeeArray);

                if (answers.addAnother){
                    askGeneralQuestions(employeeArray);
                    
                }else{render.render(employeeArray)
                    console.log(html)}

            });




};

askEngineerQuestions = function () {
    inquirer
        .prompt([

            {
                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id number",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"


            },
            {
                type: "input",
                message: "What is your github user name?",
                name: "github"
            },
            {
                type: "confirm",
                message: "Would You Like to Add Another Team Member?",
                name: "addAnother"

            }]).then(answers => {
                const employeeName = answers.name
                const employeeId = answers.id;
                const employeeEmail = answers.email
                const github = answers.github;

                
                myNewEngineer = new Engineer(employeeName, employeeId, employeeEmail, github)

                employeeArray.push(myNewEngineer);

                console.log(employeeArray);

                if (answers.addAnother){
                    askGeneralQuestions(employeeArray);
                    
                }else{render.render(employeeArray)
                    console.log(html)}
            });




};

askInternQuestions = function () {

    inquirer
        .prompt([

            {

                type: "input",
                message: "What is your name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is your employee id number",
                name: "id"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"


            },
            {
                type: "input",
                message: "What school did you attend?",
                name: "school"
            },
            {
                type: "confirm",
                message: "Would You Like to Add Another Team Member?",
                name: "addAnother"

            }]).then(answers => {
                const employeeName = answers.name
                const employeeId = answers.id;
                const employeeEmail = answers.email
                const school = answers.school;

                myNewIntern = new Intern(employeeName, employeeId, employeeEmail, school)

                employeeArray.push(myNewIntern);

                console.log(employeeArray);
            
                if (answers.addAnother){
                    askGeneralQuestions(employeeArray);
                    
                }else{render.render(employeeArray)
                console.log(html)}

            });
}


askGeneralQuestions();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
