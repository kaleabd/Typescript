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