// Destructuring Objects
const obj = { id: 1, value: 10, developer: true };

// Classical way
const myId = obj.id; 
const myValue = obj.value; 
const isDeveloper = obj.developer; 

// Outputs
console.log(myId); // Output: 1
console.log(myValue); // Output: 10
console.log(isDeveloper); // Output: true

// Modern way
const { id, value, developer } = obj;

// Outputs
console.log(id); // Output: 1
console.log(value); // Output: 10
console.log(developer); // Output: true

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101230988226936/?type=3&theater
* Instagram: https://www.instagram.com/p/B-h2CrKJmkw/
* Twitter: https://twitter.com/arch_code/status/1251545165849923584/photo/1
*/