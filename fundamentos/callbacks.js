// Un callback es una funcion que se ejecuta dentro de una funcion, sirve para la ejecucion asincronica

const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Rafael'
    }

    setTimeout(() => {
        callback(user);
    }, 1500)
}

getUserById(10, (user) => {
    console.log(user.name.toUpperCase());
});