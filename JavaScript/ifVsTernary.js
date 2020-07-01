// If vs. Ternary
const five = 5;
let isFive;

// Classical way
if (five === 5) { 
    isFive = "Yeah! It's five";
}
else {
    isFive = "No, it's not five";
}

console.log(isFive); // Output: "Yeah! It's five"
isFive = null; // Cleaning variable

//Modern Way
isFive = isFive === 5 ? "Yeah! It's five" : "No, it's not five";

console.log(isFive); // Output: "Yeah! It's five"

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101237221559646/?type=3&theater
* Instagram: https://www.instagram.com/p/B-ryKv0AeOy/
* Twitter: https://twitter.com/arch_code/status/1251547346447618052/photo/1
*/