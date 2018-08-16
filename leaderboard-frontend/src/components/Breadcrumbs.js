//________MODULES________
import React, { Component } from "react";

//________STYLING________
import "./Breadcrumbs.css";

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location.pathname.split(/\/(\w+)/g),
    };
  }
  render() {
    return (
      <div className="APP__BREADCRUMBS">
      {this.state.location.map((loc, index) => {
        if(loc.length > 0) {
          return(
            <div className="APP__CRUMB" key={`loc${index}`}>
              <p>{loc}  =></p>
            </div>
          )
        }
      })}
        {this.state.location[0]}
      </div>
    );
  }
}

export default Breadcrumbs;
