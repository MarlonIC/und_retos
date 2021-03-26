/**
 Cree una clase RomanNumerals que pueda convertir un número romano en un valor entero.
 Los números romanos modernos se escriben expresando cada dígito por separado comenzando con el dígito más a la izquierda y saltando cualquier dígito con un valor de cero.

 En números romanos se representa 1990:
   - 1000 = M
   - 900 = CM
   - 90 = XC
   - resultando en MCMXC.
 2008 se escribe como:
   - 2000 = MM
   - 8 = VIII
   - resultado MMVIII.
 1666 usa cada símbolo romano en orden descendente: MDCLXVI.

 Equivalencias de números romanos
   - I -> 1
   - V -> 5
   - X -> 10
   - L -> 50
   - C -> 100
   - D -> 500
   - M -> 1000

 Ejemplo codigo:

   const RomanNumerals = {
    toRoman: () => {},
    fromRoman: () => {}
   }

   RomanNumerals.toRoman(1000); // should return 'M'
   RomanNumerals.fromRoman('M'); // should return 1000
*/

const RomanNumerals = {
  toRoman: (number) => {
    const romans = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
    const lengthNumber = number.toString().length;
    let valueRoman = '';

    for (let i=0; i < lengthNumber; i++) {
      const numberComplete = number % parseInt('1'  + '0'.repeat(lengthNumber - i));
      const numberUnit = Math.trunc(numberComplete / parseInt('1'  + '0'.repeat(lengthNumber - (i+1))));
      const numberVolume = numberUnit + '0'.repeat(lengthNumber-i-1);

      for (const romansKey in romans) {
        if (romans[romansKey] <= numberVolume) {
          if (romans[romansKey] === parseInt(numberVolume)) {
            valueRoman += romansKey;
            break;
          }
          if (numberUnit === 9) {
            const position_one = parseInt(1 + '0'.repeat(lengthNumber - i - 1));
            const position_two = parseInt(10 + '0'.repeat(lengthNumber - i - 1));
            valueRoman += Object.keys(romans).find(key => romans[key] === position_one) + Object.keys(romans).find(key => romans[key] === position_two);
            break;
          }
          if (numberUnit >= 5) {
            const position_one = parseInt(5 + '0'.repeat(lengthNumber - i - 1));
            const position_two = parseInt(1 + '0'.repeat(lengthNumber - i - 1));
            valueRoman += Object.keys(romans).find(key => romans[key] === position_one) + Object.keys(romans).find(key => romans[key] === position_two).repeat(numberUnit-5);
            break;
          }
          if (numberUnit === 4) {
            const position = parseInt(5 + '0'.repeat(lengthNumber - i - 1));
            valueRoman += romansKey + Object.keys(romans).find(key => romans[key] === position);
            break;
          }
          valueRoman += romansKey.repeat(numberUnit);
          break;
        }
      }
    }
    return valueRoman;
  },
  fromRoman: (roman) => {

  }
}

const number = 2008;
const to_roman = RomanNumerals.toRoman(number);
const to_number = RomanNumerals.fromRoman('M');
console.log('Número romano de', number, 'es:', to_roman);