//No podemos usar export de ECMASCRIPT, porque asi funciona node
//Usamos el objeto gloal module
const fs = require('fs');

const createFile = async (output = '', fileName = '') => {
    try {
        fs.writeFileSync(fileName, output);

        return fileName;
    }
    catch(err) {
        throw err
    }

}

const multiply = (base = 5) => {
    let output = '';

    for (let i = 0; i <= 10; i++) {
        output += `${base} * ${i} = ${base * i}\n`;
    }

    return createFile(output, `multiplication-table-${base}.txt`);
} 

module.exports = {multiply}