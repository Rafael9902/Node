//Desestructuración de objetos
const deadpool = {
    name: "wade",
    lastName: "Wilson",
    power: "Regeneration",
    getName(){
        return `${this.name} ${this.lastName} ${this.power}`
    }
}

console.log(deadpool.getName());

//propiedades
//const { name, lastName, power } = deadpool

function printHeroe(heroe){
    const { name, lastName, power } = heroe;
    console.log(heroe);
}

printHeroe(deadpool)

//arreglos
const heroes = ["Superman", "Batman"];

const [h1, h2] = heroes;

console.log(h1, h2)