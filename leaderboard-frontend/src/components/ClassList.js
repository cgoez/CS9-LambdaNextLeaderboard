//________MODULES________
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { addClass } from '../actions/actions';
import { connect } from 'react-redux';
//________STYLING________
import './ClassList.css'


//________DUMMY DATA________
// classes: [
//     { cName: "CS9", cPop: 52, cPart: 74.05, cHired: 22 },
//     { cName: "CS10", cPop: 72, cPart: 87.25, cHired: 44 },
//     { cName: "ML3", cPop: 13, cPart: 51.23, cHired: 7 }
// ],

// classes: props.classes,

//________CLASSLIST________
class ClassList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: '',
            students: [],
            addingClass: false,
            classes: [
                { cName: "CS9", cPop: 52, cPart: 74.05, cHired: 22 },
                { cName: "CS10", cPop: 72, cPart: 87.25, cHired: 44 },
                { cName: "ML3", cPop: 13, cPart: 51.23, cHired: 7 }
            ]
        };
    }
    handleInput = e => {
        const { name, value } = e.target
        console.log(name, value)
        // c
        this.setState({ class: value })
        
    }
    handleClass = () => {
        console.log("state", this.state.addingClass)
        
        this.setState({addingClass: true})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log("Fired handleSubmit")
        // this.props.addClass(this.state.class)
        const data = this.state.class
        this.props.addClass({name: data})
    }

    render() {
        // Check for current list of classes
        if(this.state.classes) {
            return ( 
                <div className="APP__CLASSLIST">
                    {/* Map through classes and make a card for each one. */}
                    {this.state.classes.map((cID, index) => {
                        return(
                            <div key ={`classID${index}`}>
                                <ClassCard classID={cID} />
                            </div>
                        );
                    })}
                    {/* Button to add a new class */}
                    <div className="APP__ADDCLASS__CARD">
                        {this.state.addingClass ? <AddNewClass handleSubmit={this.handleSubmit} handleInput={this.handleInput} name={this.state.name} /> : <AddClass handleClass={this.handleClass}  /> }
                        {/* <AddClass /> */}
                    </div>
                </div> 
            );
        } else {  // Highlight "Add a new class", if there are no classes
            return(
                <div className="APP__ADDCLASS__SOLO">
                    <AddClass handleClass={this.handleClass} />
                </div>
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
function AddClass(props) {
    return(
        <div>
            <p>Add a new class</p>
            <div className="APP__ADDCLASS__BUTTONWRAPPER">
            <button onClick={props.handleClass} className="APP__ADDCLASS_ADDBUTTON">+</button>
            </div>
            {/* <Link to={`/createclass`} className="APP__ADDCLASS__BUTTONWRAPPER"><button onClick={props.handleClass} className="APP__ADDCLASS_ADDBUTTON">+</button></Link> */}
        </div>
    );
};

//Input Fields for class
const AddNewClass = (props) => {
    return(
        <div>
            <input
            type="text"
            value={props.class}
            placeholder="Enter Class Name"
            onChange={props.handleInput}
            />
            <button onClick={props.handleSubmit} >Save Class</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        students: state.students,
        class: state.class
    }
}
//________EXPORT________
export default connect(mapStateToProps, {addClass})(ClassList);