const {price, quantity, name} = { name: 'shirt', price :500, quantity: 7 };

console.log(price,'taka',quantity,'ta', name)

// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmountPay = yourPay + vatAmount;

// const price = product.price

// const discount = price*20/100;
// const yourPay = price - discount;
// const vatAmount = price*7/100;
// const totalAmountPay = yourPay + vatAmount;
// const price = product.price

const discount = price*20/100;
const yourPay = price - discount;
const vatAmount = price*7/100;
const totalAmountPay = yourPay + vatAmount;


const device = { name: 'phone', band: 'samsung', price1: 17000};
const {band, price1} = device;
console.log(band, price1)

//----------------------------------------//

const numbers = [25, 88, 89, 101]
const [first, second] = numbers;
// console.log(first, second)
const [math, physic, chemistry, biology] = [85,89,90,88]
console.log(biology)