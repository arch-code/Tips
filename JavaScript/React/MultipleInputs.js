// Javascript - Controlling multiple inputs
import React, { Component } from 'react';

class MultipleInputs extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
        }
    }

    // Single function to handle all input changes
    updateValues (evt) {
        const { name, value } = evt.target;

        /*  [name]:
            will find inside the state the attribute with that same name
            to update it's value
        */

        this.setState({
            [name]: value,
        });
    }

    render () {
        const { name, age } = this.state;
        return (
            <div>
                <input name='name' value={name}
                    onChange={evt => this.updateValue(evt)} />
                <input name='age' value={age}
                    onChange={evt => this.updateValue(evt)} />
            </div>
        )
    }
}

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/106924720990896/?type=3&theater
* Instagram: https://www.instagram.com/p/B_FsUmHA6xD/
* Twitter: https://twitter.com/arch_code/status/1251553264442769408/photo/1
*/