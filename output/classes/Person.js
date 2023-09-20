export class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    greeting() {
        return `Greeting ${this.name}`;
    }
}
