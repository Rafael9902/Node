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

const getEmployee = (id, callback) => {
    const employee = employees.find(e => e.id === id);

    return employee ||  `Employee with id:${id} not found`;
}

getEmployee(3, (err, employee) => {
    console.log(employee);
})