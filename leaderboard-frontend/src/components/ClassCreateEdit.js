import React, {Component} from 'react'

class ClassCreateEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class_name : '',
            last_name :'',
            first_name : '',
            email : '',
            github: '',
            huntr: ''
        }
    }
    handleInput = e => {
        // console.log([e.target.name] : e.target.value)
        e.preventDefault()
        // console.log(this.state.class_name)
        const {name, value} = e.target
        console.log(name, value)

        this.setState({[name] : value})
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
                  <button onClick={this.handleImport} >Import CSV</button>
              </div>
              <div className="Add_Students" >


              </div>
            </div>
          )
        }
}

export default ClassCreateEdit