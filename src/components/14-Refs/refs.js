import React, { Component } from 'react';

class Refs extends Component {

    //* this is way for dealing with state and props
    // state={
    //     name:this.props.name
    // }

    //*Ref: to get element object 

    constructor(props) {
		super(props)
		this.inputRef = React.createRef()
		this.cbRef = null
		this.setCbRef = element => {
			this.cbRef = element
		}

        this.userRef=React.createRef()
	}

    componentDidMount() {
		// this.inputRef.current.focus()
		// console.log(this.cbRef)
		if (this.cbRef) {
			this.cbRef.focus()
		}
	}

	clickHandler = () => {
		alert(this.inputRef.current.value)
        alert(this.userRef.current.value)
	}


    render() {
        return (
            <div>
                {/* {this.state.name} */}
				<input type="text" ref={this.inputRef} />
				<input type="text" ref={this.setCbRef} />
                <input type="text" ref={this.userRef}/>
				<button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default Refs;