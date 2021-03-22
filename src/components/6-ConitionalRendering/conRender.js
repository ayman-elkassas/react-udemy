import React, { Component } from 'react';

class ConRender extends Component {
    constructor(props) {
        super(props);
        this.state={
            isLogged:true
        }
    }

    render() {
        return this.state.isLogged?(
            <div>
                Welcome Visitor
            </div>
        ):(
            <div>
                Guest Current
            </div>
        );
    }
}

export default ConRender;