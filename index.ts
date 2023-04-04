// modules
import { isPalindrome } from './utils'

let message: string = 'Hello world!';
console.log(message)

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
console.log(
    'Logged in user: ',
    process.env.USER
)

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





















