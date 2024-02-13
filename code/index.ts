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