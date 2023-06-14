class Animal {
    constructor(name, greeting, weight){
        this.name = name;
        this.greeting = greeting;
        this.weight = weight;
    }
    sayHello() {
        return `${this.greeting}! I'm ${this.name}! weight ${this.weight}`;
    }
}

class cat extends Animal{
    constructor(name, weight){
       super(name, "SUUUUUU", weight);
    }
}

class dog extends Animal{
    constructor(name, weight){
       super(name, "OUH WOOO", weight);
    }
}
console.log(new cat("Charle", "heavy").sayHello());
console.log(new dog("Miguel", "564kg").sayHello());