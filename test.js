// ts-node
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var message = 'hello world';
console.log(message);
// unions
// unions means using more than one types
var formatCommandLine = function (input) {
    var line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(function (x) { return x.trim(); }).join(' ');
    }
    return line;
};
console.log(formatCommandLine(['hello', '  world']));
var rollDice = function () {
    return (Math.floor(Math.random() * 6) + 1);
};
console.log(rollDice());
var area = function (shape) {
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
function reverse(stringOrstringArray) {
    if (typeof stringOrstringArray === 'string') {
        return stringOrstringArray.split('').reverse().join('');
    }
    else {
        return stringOrstringArray.slice().reverse();
    }
}
var helloMessage = reverse('hello');
var h_e_l_l_o = reverse(['h', 'e', 'l', 'l', 'o']);
console.log(helloMessage);
console.log(h_e_l_l_o);
// readonly array
function reverseSorted(input) {
    return input.sort().reverse();
}
var start = [1, 2, 3, 4, 5];
var result = reverseSorted(start);
console.log(result); // [ 5, 4, 3, 2, 1 ]
//! in this case the sort() function will imutate(change) the original value
console.log(start); // [ 5, 4, 3, 2, 1 ]
//? BUT WE'VE A SOLUTION FOR THIS IN MIGHTY TYPESCRIPT
//! we use the readonly property
//we only read the input values not imutate them
function reverseSorter(input) {
    // so it will show us an error while we're using sort for the inputs as we can't imutate the readonly values
    // so we will use slice to copy the files first then adjust them like we want.
    return input.slice().sort().reverse();
}
// so through out these steps we can make sure that we only change the input values when we're using the functions otherwise it will keep with the original values
var end = [1, 2, 3, 4, 5];
var res = reverseSorter(end);
console.log(res, " ", end);
function move(point, x, y) {
    return [point[0] + x, point[1] + y];
}
var pnt = [0, 0];
var moves = move(pnt, 10, 10);
console.log(moves);
console.log(pnt);
// this
function double() {
    this.value = this.value * 2;
}
var valid = {
    value: 10,
    double: double
};
valid.double();
console.log(valid.value); // 20 
function addFullName(obj) {
    return __assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) });
}
var john = addFullName({
    email: 'john@example.com',
    firstName: 'john',
    lastName: 'Doe'
});
console.log(john.email);
console.log(john.fullName);
var jane = addFullName({ firstName: 'John', lastName: 'emilia', gender: 'binary' });
console.log(jane.gender);
// typeof
var center = {
    x: 0,
    y: 0,
    z: 0
};
var unit = {
    x: center.x + 1,
    y: center.y + 1,
    z: center.z + 1
};
function getPayment() {
    return {
        creditCardToken: 'abebebesobela@whilechalaismechebetingchube'
    };
}
var johnny = {
    name: 'Jhonny',
    age: 35,
    location: 'Addis Ababa'
};
function logGet(obj, key) {
    var value = obj[key];
    console.log('Getting: ', key, value);
    return value;
}
var age = logGet(johnny, 'age');
