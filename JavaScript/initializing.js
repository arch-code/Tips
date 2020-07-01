// Javascript - Initializing
const hasValue;
let receivingValue;

// Classical way
if (hasValue) {
    receivingValue = hasValue;
}
else {
    receivingValue = 'Initial value';
}

console.log(receivingValue) // Output: 'Initial value'

//Cleaning variable
receivingValue = null;

// Modern way
receivingValue = hasValue || 'Initial value';

console.log(receivingValue) // Output: 'Initial value'

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101241334892568/?type=3&theater
* Instagram: https://www.instagram.com/p/B-ujPTFgRSf/
* Twitter: https://twitter.com/arch_code/status/1251547723666460673/photo/1
*/