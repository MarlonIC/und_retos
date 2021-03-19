/**
 Érase una vez, en un camino a través del viejo oeste montañoso salvaje
 A un hombre se le dieron instrucciones para ir de un punto a otro. Las direcciones eran "NORTE", "SUR", "OESTE", "ESTE". Claramente, "NORTE" y "SUR" son opuestos, "OESTE" y "ESTE" también.
 Ir en una dirección y regresar en la dirección opuesta de inmediato es un esfuerzo innecesario. Dado que este es el salvaje oeste, con un clima espantoso y poca agua, es importante que se ahorre algo de energía, de lo contrario, podría morir de sed.
 Cómo cruzar un desierto montañoso de manera inteligente. Las instrucciones dadas al hombre son, por ejemplo, las siguientes (según el idioma):

 ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
 or
 { "NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST" };
 or
 [North, South, South, East, West, North, West]

 Inmediatamente puede ver que ir "NORTE" e inmediatamente "SUR" no es razonable, ¡mejor quédese en el mismo lugar! Entonces, la tarea es darle al hombre una versión simplificada del plan. Un mejor plan en este caso es simplemente:

 ["WEST"]
 or
 { "WEST" }
 or
 [West]

 Reto:
 Escriba una función dirReduc que tomará una matriz de cadenas y devolverá una matriz de cadenas con las direcciones innecesarias eliminadas (W <-> E o S <-> N una al lado de la otra).
 */

function dirReduction(directions) {
    const filterValidate = directions.filter((direction) => {
        if (typeof direction !== 'string' || !['north', 'south', 'east', 'west'].includes(direction.toLowerCase())) {
            return direction;
        }
    });
    if (filterValidate.length !== 0) { return 'Valores inválidos'; }

    const point = [0, 0];
    let directionOptimize = [];

    for (const direction of directions) {
        switch (direction.toLowerCase()) {
            case 'north':
                point[1] = point[1] + 1;
                break;
            case 'south':
                point[1] = point[1] - 1;
                break;
            case 'east':
                point[0] = point[0] + 1;
                break;
            case 'west':
                point[0] = point[0] - 1;
                break;
        }
    }

    if (point[0] > 0) {
        for (const number of Array(point[0]).keys()) {
            directionOptimize.push('East');
        }
    }
    if (point[0] < 0) {
        for (const number of Array(Math.abs(point[0])).keys()) {
            directionOptimize.push('West');
        }
    }
    if (point[1] > 0) {
        for (const number of Array(point[1]).keys()) {
            directionOptimize.push('North');
        }
    }
    if (point[1] < 0) {
        for (const number of Array(Math.abs(point[1])).keys()) {
            directionOptimize.push('South');
        }
    }

    return directionOptimize;
}

const matrix = ["NORTH", "WEST", "SOUTH", "EAST"];
const result = dirReduction(matrix);
console.log(result);