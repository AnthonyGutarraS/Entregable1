// Este script funciona de la siguiente manera primero pide al usuario que ingreses cuanto sera el presupuesto que tienes para gastar en el mes, luego la categoria de gasto por ejemplo Alimentos y luego ingresas todos los gastos que tendras en esa categoria junto con su importe por ejemplo Frutas con importe 20, Verduras con importe de 30, y haci varios tipos de gastos, luego te da un resumen de lo que gastaste por categoria incluyendo el % con respecto al gasto total, luego dependiendo de si exediste tu presupuesto o no te muestra cuanto ahorras.(Igual profe creo que me complique mucho porque como tal aun no se html y css pienso que con ello se puede obtener de manera mas facil todo esto, igual para el siguiente entregable tratare de aprender esos temas por mi cuenta)

let presupuesto = parseInt(prompt('Ingrese el presupuesto de este mes'));
const categorias = [];

function agregarCategoriaYGastos() {
    let nuevaCategoria = prompt('Ingrese una categoria para los siguientes gastos, (si quiere terminar ingresar LISTO)');

    if (nuevaCategoria.toUpperCase() === 'LISTO') {
        return false;
    }

    let gastos = [];
    while (true) {
        let nombreGasto = prompt(`Ahora ingrese el nombre del gasto en la categoría ${nuevaCategoria}, (si quiere terminar ingresar LISTO)`);
        if (nombreGasto.toUpperCase() === 'LISTO') {
            break;
        }

        let importeGasto = parseFloat(prompt('Ingrese el importe del gasto'));
        if (isNaN(importeGasto)) {
            alert('Por favor ingrese un número válido para el importe del gasto');
            continue;
        }

        gastos.push({ nombre: nombreGasto, importe: importeGasto });
    }

    categorias.push({ categoria: nuevaCategoria, gastos: gastos });
    return true;
}

function calcularGastoTotal() {
    let gastoTotal = 0;
    for (let i = 0; i < categorias.length; i++) {
        for (let j = 0; j < categorias[i].gastos.length; j++) {
            gastoTotal += categorias[i].gastos[j].importe;
        }
    }
    return gastoTotal;
}

function mostrarResumen(gastoTotal) {
    for (let i = 0; i < categorias.length; i++) {
        let gastoCategoria = 0;
        for (let j = 0; j < categorias[i].gastos.length; j++) {
            gastoCategoria += categorias[i].gastos[j].importe;
        }
        let porcentajeGasto = (gastoCategoria / gastoTotal) * 100;
        console.log(`Categoría: ${categorias[i].categoria}, Total Gastado: ${gastoCategoria}, Porcentaje del Gasto Total: ${porcentajeGasto.toFixed(2)}%`);
    }
}

while (agregarCategoriaYGastos()) {}

let gastoTotal = calcularGastoTotal();
if (gastoTotal > presupuesto) {
    console.log('Has superado tu presupuesto mensual.');
} else {
    console.log('No has superado tu presupuesto mensual.');
    let ahorro = presupuesto - gastoTotal;
    console.log(`Te queda un ahorro de: ${ahorro}`);
}

mostrarResumen(gastoTotal);
