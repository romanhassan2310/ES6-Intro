// const poem = 'amm pata jura jura 
// marbu chabok chorbe ghora'


// const poem = 'amm pata jura jura \n'+
// 'marbu chabok chorbe ghora \n'+
// 'ore khoka ghure dara'

const poem =`Amm pata jura jura
marbo chabuk chorbe ghora 
ore babu ghure dara
asche amar pagla ghura`
// console.log(poem)

function sum (num1, num2){
    const result = num1 + num2; 
    // const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;
    const output = `sum of ${num1} and ${num2} is equal to: ${result}`
    console.log(output);
}
sum (10,20)

const price = 120;
const discountedPrice = `Discounted price of ${price} after 20% discount: ${price * 0.8}`
console.log(discountedPrice)