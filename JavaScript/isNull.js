// Is Null?
const exist = true;
let notNull;

// Classical way
if (exist) { 
    notNull = "It's not null";
}

console.log(notNull); // Output will be "It's not null"
notNull = null; //Cleaning variable

//Modern Way
notNull = exist && "It's not null";

console.log(notNull); // Output will be "It's not null"

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101230531560315/?type=3&theater
* Instagram: https://www.instagram.com/p/B-hPkDsJ1Ns/
* Twitter: https://twitter.com/arch_code/status/1251545038238212097/photo/1
*/