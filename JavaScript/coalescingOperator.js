// Javascript - Nullish coalescing operator

const isNull;
const notNull = 3;

const firstValue = isNull ?? 'The value is null';
console.log(firstValue); // Output: 'The value is null'

const secondTest = notNull ?? 'The value is null';
console.log(secondTest); // Output: 3

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/115137503502951/?type=3&theater
* Instagram: https://www.instagram.com/p/B_Vi2wKACUJ/
*/