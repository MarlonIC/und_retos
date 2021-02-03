function contador(objectParam) {
    counter = 0;
    for (var i = 0; i < objectParam.length; i++) {
        if (i % 2 != 0) {
            if ((objectParam[i - 1] + 1) == objectParam[i] || (objectParam[i] + 1) == objectParam[i - 1]) {
                counter += 1;
            }
        }
    }
    return counter;
}

objectParam = [1, 3, 9, 10, 2, 6, -4, -3, 7, 6, 9];
resultado = contador(objectParam);
console.log(resultado);
