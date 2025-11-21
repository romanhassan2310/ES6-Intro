const numbers = [ 1, 3,5,6,8,9]
for(const num of numbers){
    // console.log(num)
}

const employee = {
    name: 'Roman Hassan',
    designation: 'Software Engineer',
    salary: 120000,
    experience: `2 Years`,
    age:` 22 Years`
}
for (const key in employee){
    const value = employee[key]
    console.log(key, value)
}
const keys = Object.keys(employee)
const values = Object.values(employee)
console.log(keys)
for (const key of keys){
    const value = employee[key]
}
