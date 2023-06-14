class Person {
    constructor (firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    get FullName(){
        return `${this.firstname} ${this.lastname} is a living legend`;
    }
    
    set FullName(NewName){
          const [firstname, lastname] = NewName.split(" ");
          this.firstname = firstname;
          this.lastname = lastname;
    }

}

const people = new Person("Dean", "Winchester");
people.FullName = "Sam Winchester";
 
console.log(people.FullName);
console.log(people.firstname);
console.log(people.lastname);
