"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// modules
const utils_1 = require("./utils");
let message = 'Hello world!';
console.log(message);
// PRIMITIVE
let isPresent = false;
let magic = 66.6;
let hello = 'world';
let notDefined = undefined;
let notPresent = null;
let penta = Symbol('star');
// INSTANCE
let regexp = new RegExp('ab+C');
let array = [1, 2, 3];
let set = new Set([1, 2, 3]);
//Array
let arr = [1, 2, 3];
// Usage
arr = [1];
arr = [1, 2, 3, 4, 5];
// arr = ['hello'] // error
// TUPLE
let tuple = [0, 0];
//usage
tuple = [1, 2];
let center = {
    x: 0,
    y: 0
};
const add = (a, b) => {
    return a + b;
};
function log(message) {
    console.log('LOG: ', message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
let point2D = { x: 0, y: 3 };
let point3D = { x: 0, y: 3, z: 4 };
// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let cat = new Animal('Cat');
cat.move(10);
// cat.name = 'Dog'
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters} m.`);
    }
}
// unknown and any
let exampleAny;
let exampleUnknown;
//any - complete freedom to do anything you can imagine
exampleAny = 123;
exampleAny = "hello";
exampleAny = true;
//unknown
exampleUnknown = 213;
exampleUnknown = 'hello';
// to understand the difference look to this example
function logger(value) {
    console.log(value.toFixed(21));
}
logger(123.3);
logger('hello');
//###
function logg(value) {
    if (typeof value == 'number') {
        console.log(value.toFixed(21));
    }
    else {
        console.log(value);
    }
}
logg(334);
logg("hello");
// Casting
let leet;
leet = '1337';
// use as number
const number = +leet;
// module imort 
console.log((0, utils_1.isPalindrome)('madam'));
// declarations
console.log('Logged in user: ', process.env.USER);
// asyn and await
const delay = (ms) => new Promise(res => setTimeout(res, ms));
const mainAsync = () => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(1000);
    console.log('1s');
    yield delay(1000);
    console.log('2s');
});
mainAsync();
const points = {
    x: 0,
    y: 0
};
// // variable assignmbet
//  points = {x: 2, y:3}
//  // property assignment
//  points.x = 1;
//  points.y = 3
//property read
console.log(points.x, points.y);
const formatCommandLine = (input /* : Inputs*/) => {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
};
console.log(formatCommandLine('hello   '));
console.log(formatCommandLine(['hello', '  world']));
// console.log(formatCommandLine(1443)) => error because the type shoulbe either string or array of strings
// LITERALS
let directions;
directions = 'North';
const area = (shape) => {
    // if ('size' in shape) {
    if (shape.kind === "square") { /* this method is called discriminated */
        return shape.size * shape.size;
    }
    // if ('width' in shape){
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
};
area({ kind: 'square', size: 2 });
function logValidation(result) {
    if (result.isValid) {
        console.log('Success, validared value ', result.validatedValue);
    }
    if (result.isValid === false) {
        console.log('Failure, error reason ', result.errorReason);
    }
}
const users = [
    { name: 'kaleab', age: 33 },
    { name: 'mekdes', age: 43 }
];
function getUserAge(name) {
    const user = users.find(user => user.name === name);
    if (user == null) {
        throw new Error(`User not found ${name}`);
    } // this is added because the strict value is setted to true and will cause an error because the value of the user might be undefined so we have to check for both cases
    return user.age;
}
function userContact(details) {
    console.log(`
        Dear ${details.name}. I hope you received our email at ${details.email}.
        We will call you at ${details.phone}
    `);
}
userContact({
    name: "kaleab",
    email: "kaleab@dereje.com",
    phone: 5432
});
const bruce = {
    name: "bruce",
    email: "bruce@wayne.com",
    phone: '911'
};
const alfred = {
    name: 'alfred',
    email: "alfred@dwayne.com",
}; // doesn't cause and error because the phone is optional
let point;
function initialize() {
    point = { x: 0, y: 0 };
}
initialize();
console.log('After intialized: ', point.x, point.y);
/*
interface points3D extends points2D {
    z: number,
}
*/
// DECLARATION MEERGING
/*
export interface Request {
    body: any;
}

export interface Request {
    json: any;
}

function handleRequest(req: Request){
    req.body;
    req.json;
}
*/
