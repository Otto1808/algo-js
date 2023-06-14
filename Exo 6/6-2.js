class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        return `${this.firstName}! I'm ${this.lastName}!`;
    }
}

console.log(new Person("Laurent", "Charle").sayHello());