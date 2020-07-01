// Javascript - Group array objects

// Group by make
const cars = [
    { 'make': 'audi', 'model': 'r8', 'year': '2012' },
    { 'make': 'audi', 'model': 'rs5', 'year': '2013' },
    { 'make': 'ford', 'model': 'mustang', 'year': '2012' },
    { 'make': 'ford', 'model': 'fusion', 'year': '2015' },
    { 'make': 'kia', 'model': 'optima', 'year': '2012' },
];

const newCars = cars.reduce(function (r, a) {
    r[a.make] = r[a.make] || [];
    r[a.make].push(a);
    return r;
}, Object.create(null));


/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/106168037733231/?type=3&theater
* Instagram: https://www.instagram.com/p/B_FOTPQg09r/
* Twitter: https://twitter.com/arch_code/status/1251552864729804803/photo/1
*/