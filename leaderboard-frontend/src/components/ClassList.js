//________MODULES________
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

//________STYLING________
import './ClassList.css'

//________CLASSLIST________
class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: props.classes,
        };
    }

    render() {
        // Check for current list of classes
        if(this.state.classes) {
            return ( 
                <div className="APP__CLASSLIST">
                    {/* Map through classes and make a card for each one. */}
                    {this.props.classes.map((cID, index) => {
                        return(
                            <div key ={`classID${index}`}>
                                <Link to={`/classID/${index}`}>
                                    <ClassCard classID={cID} />
                                </Link>
                            </div>
                        );
                    })}
                    {/* Button to add a new class */}
                    <AddClass className="APP__ADDCLASS__CARD"/>
                </div> 
            );
        } else {  // Highlight "Add a new class", if there are no classes
            return(
                <AddClass className="APP__ADDCLASS__SOLO"/>
            );
        }
    }
};

//________DRY FUNCTIONS________
// Class card constructor
function ClassCard(props) {
    const { cName, cPop, cPart, cHired } = props.classID;
    return (
        <div className="APP__CLASSCARD">
            <h5 className="APP__CNAME">{cName}</h5>
            <p className="APP__CPOP">Students: {cPop}</p>
            <p className="APP__CPART">Participation (Total): {cPart}%</p>
            <p className="APP__CHIRED">Hired: {cHired}</p>
            <button>Edit</button>
            <button>Leaderboard</button>
        </div>
    );
};

// AddClass card constructor
function AddClass() {
    return(
        <div className="APP__ADDCLASS__CARD">
            <h1>Add a new class</h1>
            <button>+</button>
        </div>
    );
};

//________EXPORT________
export default ClassList;