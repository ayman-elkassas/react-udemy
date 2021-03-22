import React,{Component, Fragment} from 'react'

class State extends Component{

    constructor(){
        super()
        this.state={
            message:"Welcome Visitor",
            count:0
        }
    }

    changeMessage=()=>{
        this.setState({
            message:"Thanks for subscribe"
        })
    }

    increment=()=>{
        //* setState can override that function receive two functions (call,callback)
        this.setState(prevState=>({
            count:prevState.count+1
        }),()=>{
            console.log('callback value',this.state.count)
        })

        console.log(this.state.count)
    }

    render(){

        //* Destructuring props and state
        const {message,count}=this.state
        const {like,share}=this.props

        return (
            <Fragment>
                <p>{message}</p>
                <button onClick={this.changeMessage}>Subscribe</button>
                <button onClick={this.increment}>Increment</button>
                {count}
                <h3>{like} {share}</h3>
            </Fragment>
            
        )
    }
}

export default State