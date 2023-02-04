class User {
    name;
    email;
    password;

    constructor(_name) {
        this.name = _name;                       // constructor overwriting
        console.log("I am in User class");
    }
    getName = () => {
        return this.name;
    }
}

class Admin extends User{
    role = "admin";
    constructor() {
        super("Dhairya Chaudhary");
        console.log("I am in Admin class");
    }
    //getName = () => {
        // parent getName
        // code execute
        // this.getName()         => infinite
        getName() {
        super.getName();
    }
}

const admin_obj = new Admin();
console.log(admin_obj.getName());