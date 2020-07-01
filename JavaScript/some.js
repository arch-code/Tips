// Javascript - Some

function isString (item) {
    return typeof item === 'string';
}

const number = [1, 2, 3];
const numbersWithString = [1, 2, '3'];

numbers.some(isString);
// Output will be false, beacuse all the values are numbers

numbersWithString.some(isString);
// Output will be true, because one of the values is a string


/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/106168037733231/?type=3&theater
* Instagram: https://www.instagram.com/p/B_ELqQQgr4X/
* Twitter: https://twitter.com/arch_code/status/1251552761201778688/photo/1
*/