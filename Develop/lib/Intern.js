const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, school) {

        this.name = name
        this.id = id
        this.email= email
        this.school = school;

    }

    getSchool() {

        console.log(`\nGithub User Name:${this.school}\n`)
        return this.school

    }

    getRole() {
        return "Intern";
     }

}
