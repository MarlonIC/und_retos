function search(string, needle) {
    const array = string.toString().split('');
    let total_consecutive = 0;
    let control_plot = false;
    let array_letters = [];
    let array_letters_array = [];
    if (!array.includes(needle.toString())) { return 0; }

    for (let i = 0; i < array.length; i++) {
        if (array[i] === needle.toString()) {
            control_plot = true;
            array_letters_array.push(array[i]);
            continue;
        }
        if (control_plot) {
            array_letters.push(array_letters_array);
            array_letters_array = [];
        }
        control_plot = false;
    }

    if (array_letters_array.length !== 0) {array_letters.push(array_letters_array); }
    for (const arrayElement of array_letters) {
        if (arrayElement.length > total_consecutive) {
            total_consecutive = arrayElement.length;
        }
    }
    return total_consecutive;
}

const string = 90000;
const needle = 0;
const result = search(string, needle);
console.log(`search('${string}', '${needle}') --> ${result}`);
