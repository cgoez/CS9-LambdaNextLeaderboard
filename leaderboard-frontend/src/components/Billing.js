//________MODULES________
import React, { Component } from 'react'

//________STYLING________
import './Billing.css'


//________BILLING________
class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        // Check for current list of classes
        if(this.state.classes) {
            return (
                <div>
                    BILLING STUFF!
                </div>
            );
        };
    };
};
        
//________EXPORT________
export default Billing;