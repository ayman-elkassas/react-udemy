import React,{Component} from 'react';
//inject props value into Component

class User extends Component {
    render() {
        return (
            <div>
                {/* with arrange render parameters (value or function) */}
                {this.props.render(true)}
            </div>
        );
    }
}

export default User