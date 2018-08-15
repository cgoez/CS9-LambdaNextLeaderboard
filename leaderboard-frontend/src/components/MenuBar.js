//________MODULES________
import React, { Component } from 'react';

//________STYLING________
import './MenuBar.css';


class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Menu-Bar">
                <div>Class</div>
                <div>Billing</div>
                <div>Settings</div>
            </div>
        );
    }
}
 
export default MenuBar;