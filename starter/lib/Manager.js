// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");
    class Manager extends Employee {
        constructor (name, email, id) {
            super (name, email, id)
        }
        getRole() {
            this.role = "Manager";
            return this.role;
        };
    }

module.exports = Manager;
/* This is what you had before adding the constructor line.
The test results are the same for both.
class Manager extends Employee {
    super(name, id, email){};
    getRole() {
        this.role = "Manager";
        return this.role;
    };
}
*/