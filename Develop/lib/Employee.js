class Employee {
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {

        console.log(`\nName:${this.name}\n`)
        return this.name

    }
    getId() {

        console.log(`\nID:${this.id}\n`)
        return this.id

    }
    getEmail() {

        console.log(`\nEmail:${this.email}\n`)
        return this.email

    }
    getRole() {

        console.log(`\nRole:Employee\n`)
        return "Employee";

    }
}

module.exports =Employee;


