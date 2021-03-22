import React, { Component } from 'react';

class FormHandling extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:"",
            comments:"",
            topic:""
        }
    }

    handleUsernameChange=(e)=>{
        this.setState({
            username:e.target.value
        })
    }

    handleSubmit=(e)=>{
        alert(`user name is ${this.state.username}`)
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    value={this.state.username}
                    onChange={this.handleUsernameChange}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default FormHandling;