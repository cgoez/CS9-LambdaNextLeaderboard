import React, { Component } from 'react'
import './LandingPage.css'
import lpimg from './LandingPage.jpg'


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div className="main-wrapper">
            <div className="login--wrapper">
                <img src={lpimg} className="APP__LPIMG" alt="logo" />
            </div>
            <p>The customers for this product are teachers who wish to provide automated knowledge reminders for their students.  Students are registered by teachers and do not need or use accounts of their own</p>
        </div> 
        );
    }
}
 
export default LandingPage;