'use strict'

//1
class Dog {
    constructor (name, age, legs, color) {
        this.name = name,
        this.age = age,
        this.legs = legs,
        this.color = color
    }
    makeSound() {
        return `woof woof`
    }
}

//2
class Cat {
    constructor (name, age, legs, color) {
        this.name = name,
        this.age = age,
        this.legs = legs,
        this.color = color
    }
    makeSound() {
        return `meeooow`
    }
}

//3

const salem = new Cat('Salem', 2, 4, 'black')
const hachiko = new Dog('Hachiko', 8, 4, 'beige')

console.log(salem.makeSound());
console.log(hachiko.makeSound());

//4

class Animal {
    constructor (name, age, legs, color) {
        this.name = name,
        this.age = age,
        this.legs = legs,
        this.color = color
    }
    makeSound(sound) {
        return sound
    }
}

//5

class Cow extends Animal {
    constructor(name, age, legs, color, type) {
        super(name, age, legs, color),
        this.type = type
    }
    makeSound() {
        return `moooo`
    }
}

const lilly = new Cow('Lilly', 10, 4, 'black and white', 'gallega')
console.log(lilly.makeSound());

//6

class Koala extends Animal {
    constructor (name, age, legs, color) {
        super(name, age, legs, color),
        this.name = name,
        this.age = age,
        this.legs = legs,
        this.color = color
    }
    animalGreeting() {
        return `Hi I'm a koala ${this.name} and I'm ${this.age} years old`
    }
}

const arki = new Koala('Arki', 4, 4, 'light grey')

console.log(arki.animalGreeting());


