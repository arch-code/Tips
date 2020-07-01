// Normalize
const str = 'ÁÉÍÓÚáéíóúâêîôûàèìòùÇçãÃ'; // String to remove accents

const parsedStr = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

console.log(parsedStr); // Output: AEIOUaeiouaeiouaeiouCcaA

/*
* Instagram: https://www.instagram.com/p/B_AZ3ROgJG5/
*/