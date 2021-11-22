//import ahorra memoria y permite cargar solo las piezas del módulo que se necesita
//Por lo que import funciona mejor que require

//import { multiply } from './helpers/multiply';

const { createFile } = require('./helpers/multiply');

const base = 4;

createFile(base)
    .then(fileName => console.log(fileName, "Created"))
    .catch(err => console.log(err));


// const fs = require('fs')

// const cleanConsole = () => console.clear();
// const base = 5;
// let output = "";

// for(let i = 0; i <= 10; i++){
//     output += `${base} * ${i} = ${base * i} \n`;
// }

// fs.writeFileSync('tabla5.txt', output);