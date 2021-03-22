import React, { Component } from 'react';
import MemoComp from '../13-Memo/memoComp';
import PureComp from './pureComp';

class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"test"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"test"
            })
        },2000)
    }

    render() {
        return (
            <div>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}

export default ParentComponent;