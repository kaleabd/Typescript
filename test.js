"use strict";
// ts-node
let message = 'hello world';
console.log(message);
// unions
const formatCommandLine = (input) => {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
};
console.log(formatCommandLine(['hello', '  world']));
const rollDice = () => {
    return (Math.floor(Math.random() * 6) + 1);
};
console.log(rollDice());
const area = (shape) => {
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
    if (shape.kind === 'rectangle') {
        return shape.width * shape.height;
    }
};
console.log(area({ kind: 'square', size: 2 }));
console.log(area({ kind: 'rectangle', width: 2, height: 3 }));
function logValidation(result) {
    if (result.isValid) {
        console.log('Success, validared value ', result.validatedValue);
    }
    if (result.isValid === false) {
        console.log('Failure, error reason ', result.errorReason);
    }
}
logValidation({ isValid: true, validatedValue: "something" });
