// Alternative to switch case with fewer lines
const getAgeAlternative = (name) => {
        return {
            Jhon: { age: 18 },
            Lucy: { age: 22 },
            Mary: { age: 25 },
        }[name];
};

getAgeAlternative('Jhon'); // Output: { age: 18 }
getAgeAlternative('Lucy'); // Output: { age: 22 }
getAgeAlternative('Mary'); // Output: { age: 25 }

// Original solution with Switch Case
function getAge (name) {
    switch (name) {
    case "Jhon":
        return { age: 18 };
    case "Lucy":
        return { age: 22 };
    case "Mary":
        return { age: 25 };
    default:
        return undefinied;
}
}

getAge('Jhon'); // Output: { age: 18 }
getAge('Lucy'); // Output: { age: 22 }
getAge('Mary'); // Output: { age: 25 }

/*
* Instagram: https://www.instagram.com/p/B-cjCSVp9Wv/
*/
