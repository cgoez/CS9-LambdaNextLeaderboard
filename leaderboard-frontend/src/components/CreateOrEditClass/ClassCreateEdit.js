import React, { Component } from 'react'
import './CreateEditClass.css'

class ClassCreateEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class_name: '',
            last_name: '',
            first_name: '',
            email: '',
            github: '',
            huntr: ''
        }
    }
    handleInput = e => {
        // console.log([e.target.name] : e.target.value)
        e.preventDefault()
        // console.log(this.state.class_name)
        const { name, value } = e.target
        console.log(name, value)

        this.setState({ [name]: value })
    }
    handleImport = e => {
        e.preventDefault();
        console.log("Fired")
        //Needs an action to send the data
        
    }
    handleAdd = e => {
        e.preventDefault();
        const studentObject = {
            lastname : this.state.last_name,
            firstname : this.state.first_name,
            email: this.state.email,
            github: this.state.github,
            huntr: this.state.huntr
        }
        // Send this studentObject when you click `Add`
        // for Create or Edit Class, Add Students part
        console.log(studentObject)
    }
    render() {
        return (
            <div>
                <div className="Settings" >
                    <input
                        type="text"
                        name="class_name"
                        placeholder="Class Name"
                        value={this.state.class_name}
                        onChange={this.handleInput}
                    />
                    <button className="BtnImport" onClick={this.handleImport} >Import CSV</button>
                </div>


                <div className="Add_Students" >
                    <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name"
                        value={this.state.last_name}
                        onChange={this.handleInput}
                    />
                    <input
                        type="text"
                        name="first_name"
                        placeholder="First Name"
                        value={this.state.first_name}
                        onChange={this.handleInput}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleInput}
                    />
                    <input
                        type="text"
                        name="github"
                        placeholder="Github"
                        value={this.state.github}
                        onChange={this.handleInput}
                    />
                    <input
                        type="text"
                        name="huntr"
                        placeholder="huntr"
                        value={this.state.huntr}
                        onChange={this.handleInput}
                    />
                    <button className="BtnAdd" onClick={this.handleAdd} >Add</button>
                </div>
            </div>
        )
    }
}


// export default connect(mapStateToProps, {addClass})(ClassCreateEdit)
export default ClassCreateEdit