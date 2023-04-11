// ts-node

let message: string = 'hello world'
console.log(message)


// unions
// unions means using more than one types
const formatCommandLine = (input: string | string[]) => {
    let line = ''
    if (typeof input === 'string'){
        line = input.trim()
    }else{
        line = input.map(x => x.trim()).join(' ')
    }
    return line
}

console.log(formatCommandLine(['hello', '  world']))

// literals

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6

const rollDice = () => {
    return (Math.floor(Math.random() * 6) + 1) as DiceValue
}

console.log(rollDice())

// narrowing

type Square = {
    kind: "square",
    size: number
}

type Rectangle = {
    kind: "rectangle",
    width: number,
    height: number
}

type Shape= 
    | Square
    | Rectangle;

const area = (shape: Shape) => {
    if (shape.kind === 'square') {
        return shape.size * shape.size
    }
    if (shape.kind === 'rectangle'){
        return shape.width * shape.height
    }
}
console.log(area({kind: 'square',size: 2}))
console.log(area({kind: 'rectangle',width: 2, height: 3}) )


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

logValidation({isValid: true, validatedValue: "something"})

//! overloading concept example
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
const h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o'])
console.log(helloMessage)
console.log(h_e_l_l_o)

// readonly array

function reverseSorted(input: number[]): number[]{
    return input.sort().reverse();
}

const start: number[] = [1,2,3,4,5]
const result = reverseSorted(start)

console.log(result) // [ 5, 4, 3, 2, 1 ]

//! in this case the sort() function will imutate(change) the original value
console.log(start) // [ 5, 4, 3, 2, 1 ]

//? BUT WE'VE A SOLUTION FOR THIS IN MIGHTY TYPESCRIPT

//! we use the readonly property
//we only read the input values not imutate them

function reverseSorter(input: readonly number[]): number[]{
    // so it will show us an error while we're using sort for the inputs as we can't imutate the readonly values
    // so we will use slice to copy the files first then adjust them like we want.
    return input.slice().sort().reverse();
}
// so through out these steps we can make sure that we only change the input values when we're using the functions otherwise it will keep with the original values

const end: number[] = [1,2,3,4,5]
const res: number[] = reverseSorter(end)
console.log(res, " ", end)

//ex -2 

type Pnt = readonly [number, number];

function move(point: Pnt, x: number, y: number): Pnt {
    return [point[0] + x, point[1] + y]
}

const pnt: Pnt = [0,0]
const moves = move(pnt, 10,10)

console.log(moves)
console.log(pnt)

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

const center = {
    x: 0,
    y: 0,
    z: 0
}

type Pnts = typeof center

const unit: Pnts = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1,
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

const age = logGet(johnny, 'age')
const locations = logGet(johnny, 'location')


