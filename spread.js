const numbers = [87, 8, 6, 91];
console.log(numbers);
console.log(...numbers);


// const max = Math.max(23,3,5,23,555,56)
const max = Math.max(...numbers)
// console.log(max)

// const first = [1,2,3,4,5];
// const second = first;
// second.push(6);
// console.log(first)

const first = [1,2,3,4,5];
const second = [...first];
const third =[0, ...first, 97, 45, 12]
second.push(6);
// console.log(first)
// console.log(second)
// console.log(third)

const ages = [45, 50, 60];
const prices = [ 120, 50, 77];
const all = [...ages,100, ...prices]

// const person = { name: 'Roman' , age:21}
// const employee = {designation: 'Developer', ...person}

console.log(all)
console.log(employee)


// const total = (a, b, c) => a + b + c;
// const result = total (10, 20, 70)
// const digits = [70, 55, 65]
// (total(...digits))