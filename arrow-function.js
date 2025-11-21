
// function declaration 
function add (num1, num2){
    return num1 + num2 ;
}
const total = add(7,3)
console.log('The result is :', total)


// function expression 
const addition = function (num1, num2){
    return num1 + num2
}

// arrow function 
const add2 = (num1, num2) =>  num1 + num2
const multiply = (a, b) => a*b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isFirstBig = (x, y) => x > y;


// multi line arrow function 
const doMath = (x, y) => {
    const makeDouble = x * 2;
    const againDouble = y * 2;
    const result = makeDouble + againDouble;
    return result;
} 
 
const result = add2(27,13);
console.log('The result is:',result)
const total1 = multiply(10,10);
console.log("Total:", total1)
const summation = sumAll()
const isBig = isFirstBig(45,5);
console.log(isBig)
