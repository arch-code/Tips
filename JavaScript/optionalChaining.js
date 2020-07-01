// JavaScript - Optional Chaining

const user = {
    name: 'Paul',
    address: {
        country: 'Brazil',
        area: {
            state: 'São Paulo',
        }
    }
}

const state = user?.address?.area?.state; 
console.log(state); // Output: 'São Paulo'

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/115615143455187/?type=3&theater
* Instagram: https://www.instagram.com/p/B_XTDf2gvV7/
*/