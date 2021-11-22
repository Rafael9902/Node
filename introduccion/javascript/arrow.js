//Arrow Functions
function add(a, b){
    return a + b;
}

const add = (a, b) => a + b;

//console.log(add(5, 10));

const addArrow = (a, b) => a +b;
const greet = (name) => `Hi ${name}`

console.log(addArrow(6, 7));
console.log(greet("Rafael"));

//las funciones tradicionales manipulan el valor a lo que apunta el this, las de flecha no


