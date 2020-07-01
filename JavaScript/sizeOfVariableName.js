// Javascript - Size of a variable name

/*
    The greater the scope of a variable, the greater it's name must be
    A global scope variable, must have a larger name
*/

const variableWithAGlobalScope = 1;

class myClass {
    // A class scope variable, also must have a large name
    constructor(brand) {
        this.variableClassScope = variableWithAGlobalScope;
    }

    myFunction () {
        // A function scope variable can have a smaller name
        let variable = this.variableClassScope;

        //A statement scope variable can have a name as small as one letter
        for (let x=0;x < variable; x++) {
            console.log('Read clean code by Robert Martin');
        }
    }
}

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/103732794643422/?type=3&theater
* Instagram: https://www.instagram.com/p/B_AERHkAA1b/
* Twitter: https://twitter.com/arch_code/status/1251552418308988936/photo/1
*/