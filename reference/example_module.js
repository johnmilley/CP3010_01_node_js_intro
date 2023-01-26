/* Example module: create and export Person class */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}.`)
    }
}

module.exports = Person

/* Module Wrapper Function
     Every module in Nodejs is wrapped in the commented-out
     wrapper function below. This gives us access to 4 useful global
     variables. */

/* (function (exports, require, module, __filename, __dirname) {

}) */

// Uncomment out the log statements below to see examples values

// console.log(__dirname)
// console.log(__filename)
// console.log(module.exports)
