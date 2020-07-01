// Javascript - Every

function isNumber (item) {
    return typeof item === 'number';
}

const number = [1, 2, 3];
const numbersWithString = [1, 2, '3'];

numbers.every(isNumber);
// Output will be true, beacuse all the values are numbers

numbersWithString.every(isNumber);
// Output will be false, because one of the values is a string


/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101647511518617/105517961131572/?type=3&theater
* Instagram: https://www.instagram.com/p/B_Cpml_g5B-/
*/