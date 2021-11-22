// setTimeout(function(){
//     console.log('hola mundo');
// }, 1000)los callbacks basicamente son funciones que se mandan como argumento a otra funcion

//

const getUserById = ( id, callback ) => {

    const user = {
        id,
        name: "Rafael"
    }

    setTimeout(() => {
        callback(user);
    }, 1500)
}

getUserById(10, (user) => {
    console.log(user)
});