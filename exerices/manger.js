const Manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
}
const Intern = {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
}

function sayHi() {
    console.log('Hello, my name is', this.name)
}
function howOldAmI() {
    console.log('I am ' + this.age + ' years old.')
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI() // I am 27 years old.
Intern.howOldAmI = howOldAmI;
Intern.howOldAmI() // I am 21 years old.

// add sayHi function to both objects
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi() // Hello, my name is John'
Intern.sayHi() // Hello, my name is Ben'