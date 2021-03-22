import React, { Component } from 'react';
import Child from './child';

class MethodsAsProps extends Component {
    constructor(props) {
        super(props);
        this.state={
            parentName:"Parent",
        }
        this.greetParent=this.getParent
    }

    getParent=(title)=>{
        alert(`Hello ${this.state.parentName} from ${title}`)
    }

    render() {
        return (
            <div>
                <Child parentHandler={this.greetParent}/>
            </div>
        );
    }
}

export default MethodsAsProps;