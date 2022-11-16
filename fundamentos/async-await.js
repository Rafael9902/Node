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

const id = 6;

const getInfoUser = async(id) => {
    try {
        const employee = await getEmployee(id);
        return employee;
    }
    catch(error) {
        throw error;
    }
}

getInfoUser(id)
    .then(msg => {
        console.log(msg)
    })
    .catch(err => console.log(err))