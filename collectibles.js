let fs = require('fs');
let ruta;


function importar(marca){
    if(marca === 'Hot Toys'){
        ruta = "./datos/figura1.json";
    }else if(marca === 'Bandai'){
        ruta = "./datos/figura2.json";
    }else if(marca === 'Star Wars'){
        ruta = "./datos/figura3.json";
    }

    return JSON.parse(fs.readFileSync(ruta));
}

module.exports = importar;