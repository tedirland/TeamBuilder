const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officePhone) {
        this.name = name
        this.id = id
        this.email = email
        this.officePhone = officePhone
    }

    getRole() {
        return "Manager";
     }

}

