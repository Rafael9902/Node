const employees = [
    {
        id: 1,
        name: 'Rafael'
    },
    {
        id: 2,
        name: 'Dolmedes'
    },
    {
        id: 3,
        name: 'Ortiz'
    },
]

const salaries = [
    {
        id: 1,
        salary: 1000
    },
    {
        id: 2,
        salary: 1500
    }
]


const getEmployee = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find(e => e.id === id);

        (employee)
            ? resolve(employee)
            : reject(`Employee with id:${id} not found`);
    });
}

const getSalary = (id) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(s => s.id === id);

        (salary)
            ? resolve(salary)
            : reject(`Salary of Employee with id:${id} not found`);
    });

}

const id = 3;
let name;

getEmployee(id)
    .then(employee => {
        name = employee.name;
        return getSalary(id)
    })
    .then(salary => console.log(`Employee ${name} have a salary of: ${salary.salary}`))
    .catch(err => console.error(err))

