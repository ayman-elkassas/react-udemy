import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            name:"ahmed"
        }
    }

    render() {
        console.log("Pure Component");
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default PureComp;