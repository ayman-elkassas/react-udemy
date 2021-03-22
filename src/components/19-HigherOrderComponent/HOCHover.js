import React,{Component} from 'react'
import UpdatedComponent from './withCounter'

class HOCHover extends Component {

    render() {
        const {count,incrementCount}=this.props;
        return (
            <div>
                <button onMouseOver={incrementCount}>Clicked {count} times</button>
            </div>
        );
    }
}

export default UpdatedComponent(HOCHover,5)
