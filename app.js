const importar = require('./collectibles');

let hotToys = importar('Hot Toys');
let bandai = importar('Bandai');
let starWars = importar('Star Wars');
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function () {
        this.figuras.forEach(figura => {
            console.log('Marca:${figura.marca} Nombre:${figura.nombre} Precio:${figura.precio} Stock:${figura.stock}');
        })
    },
    figuresByBrand: function (marca) {
        let figurasPorMarca = this.figuras.filter(function (figura) {
            return figura.marca === marca;
        })
        return figurasPorMarca;
    }
}

console.log(collectibles.figuresByBrand('Hot Toys'))