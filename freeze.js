const employee = {
    name: 'Roman Hassan',
    designation: 'Software Engineer',
    salary: 120000,
    experience: `2 years`,
    age: `22 years`
}

Object.freeze(employee)
// delete employee.salary
delete employee.experience
employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'

console.log(employee)