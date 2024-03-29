let item: [string, number, boolean] = ['Apple', 4, true]

//console.log(item[2].toString())

enum Role {admin = 1, read = 2, backup = 3}

const user = {
    firstName: 'Miguel',
    age: 41,
    role: Role.admin
}

// console.log(user)

let itemInput: unknown;
let itemName: string;

itemInput = 10
itemInput = 'Jose'

if (typeof itemInput === 'string') {
    itemName = itemInput
}

console.log('----------');

// Day 3 - Exercise 1

let pi = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);

// Day 3 - Exercise 2

let pie:string
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)

// Day 3 - Exercise 3

let isDouglas: boolean = true

console.log(`${isDouglas ? 'Oh, Hi Douglas' : 'Who are you?'}`)

// Day 3 - Exercise 4

const integer:number = 6;
const float: number = 6.66;
const hex:number = 0xf00d;
const binary:number = 0b1010011010;
const octal:number = 0o744;
const negZero:number = -0;
const actuallyNumber:number = NaN;
const largestNumber:number = Number.MAX_VALUE;
const mostBiglyNumber:number = Infinity;

const members: number[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
];

members[0] = 12345;

console.log(members);


// Day 3 - Exercise 5

const sequence: number[] = Array.from(Array(10).keys());
const animals: string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers:(string|number)[] = [1, 'one', 2, 'two', 3, 'three'];
const allMyArrays:(string|number)[][] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);


// Day 5 - Exercise 2

interface Person {
    name: string,
    age: number
}

class Person implements Person {
    constructor(public name: string, public age: number) {}
}

const jane = new Person('Jane', 31);

console.log(`${jane.name} is ${jane.age} years old.`);

// Day 5 - Exercise 3

class MC {
    greet(event: string = 'party'): string {
        return `Welcome to the ${event}`;
    }
}

const mc = new MC();
console.log(mc.greet('show'));

// Day 5 - Exercise 4

class Employee {
    constructor(public title: string, public  salary: number){}
}

const employee = new Employee('Engineer', 100000);

console.log(`The new employee's title is ${employee.title} and they earn $ ${employee.salary}.`);

// Day 5 - Exercise 5

interface UserSchema {
    id: number
    name: string
}

class User2 implements UserSchema {
    constructor(public name: string, readonly id: number) {}
}

const user2 = new User2('Dog', 1)

console.log(user2.id)

user2.name = 'Harold' // pode mudar
//user2.setId(5) // nao pode mudar

console.log(`User:`, user)

// IndexSignatures !
class HotelRooms{
    [roomName:string]:string;
}
let room = new HotelRooms()
room.A202 = 'Ana'
room.A069 = 'Gisela'
room.B69A = 'Opa'

console.log(room)

////// Override

class Saudacao extends MC {
    override greet(event: string = 'party'): string {
        return `Bem vindo ao ${event} (${super.greet(event)})`;
    }
}

// Greet
let mcHammer = new MC();
console.log(mcHammer.greet('show'))
// Saudacao
let saudar = new Saudacao()
console.log(saudar.greet('Brasil'))

//
// Day 7 - Exercise 1

interface User {
    name: string;
    age: number;
    occupation?: string;
}

interface Admin {
    name: string;
    age: number;
    role?: string;
}

type Person7 = User | Admin;

const persons: Person7[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut.'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver.'
    }
];

function logPerson(person: Person7) {
    let additionalInformation: string ='';
    if ('role' in person && person.role) {
        additionalInformation = person.role;
    } else if ('occupation' in person && person.occupation)
    {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);