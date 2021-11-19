
const {
    returnTwo,
    greeting,
    add
} = require('./functions.js')

test('returnTwo test', () => expect(returnTwo()).toBe(2));
test('greeting test', () => expect(greeting("James")).toBe("Hello, James"));
test('add test', () => expect(add(1, 2)).toBe(3));





// let testData = {
//     id:1,
//     name: 'me',
//     number1: 1,
//     number2: 8
// }

// testData('')