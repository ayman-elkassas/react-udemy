import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bind extends Component {
    constructor(props) {
        super(props);
        this.state={
            message:"Hello"
        }
    }

    clickHandler=()=>{
        this.setState({
            message:"GoodBye!"
        },()=>{
            console.log(this.state.message)
        })
    }

    //* should bind this if using normal function not arrow function

    clickNormalHandler(){
        this.setState({
            message:"Normal!"
        },()=>{
            console.log(this.state.message)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Arrow</button>
                <button onClick={this.clickNormalHandler.bind(this)}>Click Bind</button>
            </div>
        );
    }
}

Bind.propTypes = {

};

export default Bind;