const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {

        this.name = name
        this.id = id
        this.email= email
        this.github = github;

    }

    getGithub() {

        console.log(`\nGithub User Name:${this.github}\n`)
        return this.github

    }

    getRole() {
        return "Engineer";
     }

}
