//import { writeFileSync } from "fs";
const fs = require('fs')

// const createFile = (base) => {
//     return new Promise( (resolve, reject) => {
//         const output = multiply(base);
//         let fileName = `multiplication_table_${base}.txt`;

//         fs.writeFileSync(fileName, output);
//         resolve(fileName);
//     })
// }

const createFile = async(base) => {
    try {
        const output = multiply(base);
        let fileName = `multiplication_table_${base}.txt`;

        fs.writeFileSync(fileName, output);
        return fileName;
    }
    catch(err) {
        throw err;
    }
    
}

const multiply = (base) => {
    let output = "";

    for(let i = 0; i <= 10; i++){
        output += `${base} * ${i} = ${base * i}\n`;
    }

    print(output);

    return output;
}

const print = (message) => console.log(message);

module.exports = {
    createFile
}