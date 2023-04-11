// modules
import { isPalindrome } from './utils'

let message: string = 'Hello world!';
console.log(message + "typescript is available!")

// PRIMITIVE

let isPresent: boolean = false
let magic: number = 66.6
let hello: string = 'world'

let notDefined: undefined = undefined
let notPresent: null = null;

let penta: symbol = Symbol('star')

// INSTANCE

let regexp: RegExp = new RegExp('ab+C')
let array: Array<number> = [1,2,3]
let set: Set<number> = new Set([1,2,3])


//Array

let arr: number[] = [1,2,3]

// Usage

arr = [1]
arr = [1,2,3,4,5]
// arr = ['hello'] // error

// TUPLE
let tuple: [number, number] = [0,0]

//usage
tuple = [1,2]
// tuple = [5] // error: nmust be 2 items


// Objects

type Point = {x: number, y: number} // type aliance
let center: Point = {
    x: 0,
    y: 0
}

// Functions
type Add = (a: number, b:number) => number;

const add: Add = (a,b) => {
    return a + b
}

function log(message: string): void {
    console.log('LOG: ', message)
}

function sum(...values: number[]) {
return values.reduce((previous, current) => {
    return previous + current
})
}

// Structural

type Point2D = {x: number, y:number}
type Point3D = {x: number, y:number, z: number}

let point2D: Point2D = {x: 0, y:3}
let point3D: Point3D = {x: 0, y:3 , z: 4}

// Classes

class Animal {
    // private name: string
    protected name: string;
     constructor(name: string) {
        this.name = name
     
    }
    public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters}m.`)

    }
}

let cat = new Animal('Cat')
cat.move(10)
// cat.name = 'Dog'

class Bird extends Animal {
    fly(distanceInMeters: number): void{
        console.log(`${this.name} flew ${distanceInMeters} m.`)
    }
}


// unknown and any

let exampleAny: any;
let exampleUnknown: unknown;

//any - complete freedom to do anything you can imagine
exampleAny = 123
exampleAny = "hello"
exampleAny = true

//unknown
exampleUnknown = 213
exampleUnknown = 'hello'

// to understand the difference look to this example

function logger(value: any): void{
console.log(value.toFixed(21))
}

logger(123.3)
logger('hello')

//###

function logg(value: unknown): void{
    if(typeof value == 'number'){
        console.log(value.toFixed(21))
    }else{
        console.log(value)
    }
    
    }
logg(334)
logg("hello")

// Casting

let leet;

leet  ='1337'

// use as number
const number  = +leet;

// module imort 
console.log(isPalindrome('madam'))

// declarations

// console.log(
//     'Logged in user: ',
//     process.env.USER
// )

// asyn and await

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

const mainAsync = async () => {
    await delay(1000)
    console.log('1s')
    await delay(1000)
    console.log('2s')
}

mainAsync()

// read only - it makes it immutable

type Points = {
    readonly x: number,
    readonly y: number
};

const points: Points = {
    x: 0,
    y: 0
}

// // variable assignmbet
//  points = {x: 2, y:3}

//  // property assignment
//  points.x = 1;
//  points.y = 3

 //property read

 console.log(points.x, points.y)


// => UNIONS

//we can also use type aliances here

type Inputs = 
    | string
    | string[]

const formatCommandLine = (input: string | string[] /* : Inputs*/) => {
    let line = ''
    if (typeof input === 'string'){
        line = input.trim()
    }else{
        line = input.map(x => x.trim()).join(' ')
    }
    return line
}

console.log(formatCommandLine('hello   '))
console.log(formatCommandLine(['hello', '  world']))
// console.log(formatCommandLine(1443)) => error because the type shoulbe either string or array of strings


// LITERALS

let directions: 'North' | 'East' | 'South' | 'West'

directions = 'North'
// directions = 'northeast' => error because the only value assigned to this variable is literal stirng North | west | east | south

// => Narrowing

type Square = {
    kind: 'square',
    size: number
}

type Rectangle = {
    kind: 'rectangle',
    width: number,
    height: number
}

type Shape= Square | Rectangle

const area = (shape: Shape) => {
    // if ('size' in shape) {
    if(shape.kind === "square"){ /* this method is called discriminated */
        return shape.size * shape.size
    }
    // if ('width' in shape){
    if(shape.kind === 'rectangle'){
        return shape.width * shape.height
    }
}
area({kind: 'square',size:2})

// area({size: 2}) // 4
// area({width: 2, height: 3}) // 6

// Discremenated union

type ValidationSuccess = {
    isValid : true,
    validatedValue: string;
}

type ValidationFailure = {
    isValid : false,
    errorReason: string;
}

type ValidationResult = 
    | ValidationSuccess
    | ValidationFailure

function logValidation(result: ValidationResult): void{
    if(result.isValid){
        console.log('Success, validared value ', result.validatedValue)
    }
    if(result.isValid === false){
        console.log('Failure, error reason ', result.errorReason)
    }
}

// Strict : false and true from tsconfig file

type User = {
    name: string,
    age: number
}

const users: User[] = [
    {name: 'kaleab', age : 33},
    {name: 'mekdes', age:  43}
]

function getUserAge(name: string): number {
    const user = users.find(
        user => user.name === name
    )
    if(user == null){
        throw new Error(`User not found ${name}`)
    } // this is added because the strict value is setted to true and will cause an error because the value of the user might be undefined so we have to check for both cases
    return user.age
}

// Intersections

type twoDimension = {
    x: number,
    y: number
}

type threeDimension = twoDimension & {
    z: number
}

// usage 2 of intersections

type usersName = {
    name: string,
}

type usersEmail = {
    email: string,
}

type usersPhone = {
    phone: number,
}

function userContact(details: usersName & usersEmail & usersPhone  ): void{
    console.log(`
        Dear ${details.name}. I hope you received our email at ${details.email}.
        We will call you at ${details.phone}
    `)
}

userContact({
    name: "kaleab",
    email: "kaleab@dereje.com",
    phone: 5432
})

// OPTIONAL

type userInfo = {
    name: string,
    email: string,
    phone?: string // this returns the type of string | undefined
}

const bruce: userInfo = {
    name: "bruce",
    email: "bruce@wayne.com",
    phone: '911'
}
const alfred: userInfo = {
    name: 'alfred',
    email: "alfred@dwayne.com",
} // doesn't cause and error because the phone is optional

// not null assertion = it's better to rewrite the code to avoid not null assertion

type Pointed  = {
    x: number,
    y: number
}

let point: Pointed;
function initialize() {
    point = {x: 0, y: 0}
}
initialize()

console.log('After intialized: ', point!.x, point!.y)

// rewrite the code

/*
    type Point = {
        x: number,
        y: number
    }
    function initialize(): Point{
        return {x: 0, y: 0}
    }
    const point = initialize()
    console.log('After initialized: ', point.x, point.y)
*/

// INTERFACES AND TYPES

type points2D = {
    x: number,
    y: number
}

/*
interface points2D {
    x: number,
    y: number
}
*/

type points3D  = points2D & {
    z:number
}

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

// types & interface
//? Difference between them
//! types: unions, intersection(&), primitive, shorthand functions, shorthand, advanced type functions
//! interface: declarations mering, familiarity(extends)

interface InputProps {
    type: 'text'| 'email',
    value: 'string',
    onChange: (newValue: string) => void,
}

type Inputprops = {
    type: 'text'| 'email',
    value: 'string',
    onChange: (newValue: string) => void,
}

// Never
//! never returns

const fail = (message: string) => {
    throw new Error(message)
}

const sing = () => {
    while(true){
        console.log('Never gonna give you up')
        console.log('Never gonna let you down')
        console.log('Never gonna run around and desert you')
    }
}

//! Applications of never

function areas(s: Shape) {
    if(s.kind == 'square'){
        return s.size * s.size;
    }
    if(s.kind == 'rectangle'){
        return s.height * s.width;
    }

    const _ensureAllCasesAreHandled: never = s;
    return _ensureAllCasesAreHandled;
}

// Implements

type Animals = {
    name: string,
    voice(): string,
}

class Cat implements Animals {
    constructor(public name:string){}
    voice(){
        return 'meow'
    }
}

// Asserts

//? will be get back to this concept later!

// overloading
//* funciton overloads

function reverse(string: string): string;
function reverse(stringArray: string[]): string[];

function reverse(stringOrstringArray:string[] | string): string[] | string {
    if(typeof stringOrstringArray === 'string'){
        return stringOrstringArray.split('').reverse().join('');
    }else{
        return stringOrstringArray.slice().reverse();
    }

}

const helloMessage = reverse('hello')
console.log(helloMessage)

type Addition = {
    (a: number, b: number): number,
    debugName?: string
}

const addition: Addition = (a: number, b: number) => {
    return a + b
}
console.log(addition(4,5))

// Index

type usersInfo = {
    displayName: string,
    email: string
}

type userInfoDictionary = {
    [username: string]: usersInfo,
}

const personInfo: userInfoDictionary = {
    jane: {displayName: 'John', email: 'jhon@gmail.com'},
}

// Reanonlyarray

//example 1
function reverseSorted(input: number[]): number[]{
    return input.sort().reverse();
}

const start = [1,2,3,4,5]
const result = reverseSorted(start)

console.log(result)
console.log(start)

//example 2

type Pnt = readonly [number, number];

function move(point: Pnt, x: number, y: number): Pnt {
    return [point[0] + x, point[1] + y]
}

const pnt: Pnt = [0,0]
const moves = move(pnt, 10,10)

console.log(moves)
console.log(pnt)
// usages

type Neat = readonly number[]
type Long = ReadonlyArray<number>

// Double Assertion
//? what's single assertion at first place

type pnt2D = {x: number, y: number}
type pnt3D = {x: number, y: number, z: number}
type Prsn = {name: string, email: string}

let point2: pnt2D = {x: 0, y: 0}
let point3: pnt3D = {x: 10, y: 10, z:10}
let persona: Prsn = {name: 'John', email: 'john@doe.com'}

point2 = point3;
//! point3 = point2;
 // error ,Property 'z' is missing in type 'pnt2D' but required in type 'pnt3D'

 point3 = point2 as pnt3D; // single type assertion : typescript would have ok i trust you kinda reply

 //! but this is not only enough on all situations there's time when we need double assertion

//  persona = point3; //error
//  point3 = persona; //error
//  point3 = persona as pnt3D; //error ok: i don't trust you enough.
 point3 = persona as unknown as pnt3D; // ok: i doubly trust you.


// this

function double(this: {value: number}){
    this.value = this.value * 2
}
const valid = {
    value: 10,
    double,
}
valid.double() 

console.log(valid.value) // 20 

// Generic Constraints

type NameField = {firstName: string, lastName: string}

function addFullName<T extends NameField>(obj: T): T & {fullName: string}{
    return {
        ...obj,
        fullName: `${obj.firstName} ${obj.lastName}`

    }
}

const john = addFullName({
    email: 'john@example.com',
    firstName: 'john',
    lastName: 'Doe',
})
console.log(john.email)
console.log(john.fullName)

const jane = addFullName({firstName: 'John', lastName: 'emilia', gender: 'binary'})

console.log(jane.gender)

// typeof

const centers = {
    x: 0,
    y: 0,
    z: 0
}

type Pnts = typeof centers

const unit: Pnts = {
    x: centers.x + 1,
    y: centers.y + 1,
    z: centers.z + 1,
}  

/*
 or we can also use like,
 const unit: typeof center = {
    ...
 }

 we can assign the type directly to the function
*/

// lookup
//! we use loookup like the indexing method to find the types of the objects we want in the square brackets below
// typename['objweneededtolookup']

type submitRequest = {
    transactionId: string,
    personal: {
        firstName: string,
        lastName: string,
    },
    payment: {
        creditCardToken: string,
    }
}

type PaymentRequests = submitRequest['payment']

function getPayment(): PaymentRequests {
    return {
        creditCardToken: 'abebebesobela@whilechalaismechebetingchube'
    }
}

// keyof

type Prsns = {
    name: string,
    age: number,
    location: string,
}

const johnny: Prsns = {
    name: 'Jhonny',
    age: 35,
    location: 'Addis Ababa'
}

function logGet(obj: any, key: keyof Prsns): void {
    const value = obj[key];
    console.log('Getting: ', key, value)
    return value
}

const age = logGet(johnny, 'age') // Getting:  age 35

/*
or we can use it withe generic types,

function logGet<Obj, Key extends keyof Obj>(obj: Obj, key: Key){
    ...
}
*/

// Conditionals

type IsNumber<T> = 
    T extends number
    ? 'number'
    : 'other'

type WithNumber = IsNumber<number>
type WithString = IsNumber<string>

 //check on test.ts file for more examples

































