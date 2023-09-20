/* eslint-disable @typescript-eslint/space-before-function-paren */
// const userName: string = "Shuvo";
// console.log(userName);

// const arrFun = () => {
//     console.log('Arrow Function');

// }

// let playerName: string = "Messi";
// console.log(playerName);

// let str;

// str = "Bangldesh";
// str = 53;

// let names = ['Jonas', 'Margaret', 'Ariana']
// let names: string[] = ['Jonas', 'Margaret', 'Ariana']

// let numbers: number[] = [1, 2, 3, 4, 5]
// numbers.push(6, 7, 8)

// console.log(numbers);

// // tuple
// let ourTuple: [number, boolean, string] = [5, true, 'Bangladesh'];

// // Named Tuples
// const graph: [x: number, y: number] = [55.2, 41.3];

// let sportsMan: { name: string, age: number, isCaptain: boolean } = {
//     name: 'Sakib',
//     age: 35,
//     isCaptain: true,
// }

// let sportsMan2 = {
//     name: 'Sakib',
//     age: 35,
//     isCaptain: true,
// }

// const car: { type: string, mileage?: number } = {
//     type: "Toyota"
// };
// car.mileage = 2000;

// Index Signatures
// const nameAgeMap: { [index: string]: string } = {}
// nameAgeMap['name'] = 'Jonas Smith';
// nameAgeMap['city'] = 'New York';

// const nameAgeMap2: { [index: string]: string | number } = {}
// nameAgeMap2['name'] = 'Jonas Smith';
// nameAgeMap2['age'] = 30;
// nameAgeMap2['city'] = 'New York';

// function prinToConsole (str: unknown): void {
//   console.log(str)
// }
// prinToConsole(10)

// const printString = (str: unknown): void => {
//     console.log(str)
// }

// printString('Hello, TypeScript')

// const myFun = (a: string, b: string, c: string = 'c') => {
//     console.log(c);
//     console.log(`Print: ${a} ${b}`);
// }

// myFun('3', '4');

// function multiply(a: number, b: number): number {
//   return a * b
// }

// console.log(multiply(5, 4))

// // Type Aliases

// type stringOrNumber = string | number
// type userType = { name: string; age: number }

// const userDetails = (
//   id: stringOrNumber,
//   user: userType
// ): void => {
//   console.log(`User ID: ${id}, Name is: ${user.name}, Age: ${user.age}`);
// }

// userDetails(20, { name: 'John', age: 30 })

// // Function Signatures
// let printString: (a: string) => string;

// printString = (text: string) => {
//   return text
// }
// console.log(printString('Function Signatures'))

// type stringOrNumber = string | number
// type userType = { name: string; age: number }

// let userDetails: (id: stringOrNumber, userInfo: userType) => string

// userDetails = (id: stringOrNumber, userInfo: userType) => {
//   return `${userInfo.name} ID: ${id}, Age: ${userInfo.age}`
// }
// console.log(userDetails('SE23', { name: 'John', age: 30 }));

// Classes

class Person {
  public constructor(
    private name: string,
    private age: number,
    private country: string
  ) {}

  public greeting(): string {
    return `Greeting ${this.name}`
  }
}

const person1 = new Person("John", 20, "Luxembourg")
const person2 = new Person("John", 21, "Portugal")
const person3 = new Person("Jonas", 20, "Denmark")

const persons: Person[] = [person1, person2, person3]

console.log(person1.greeting())
