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

const matrix = ['North', 'South', 'South', 'East', 'West', 'North', 'West'];
const result = dirReduction(matrix);
console.log(result);