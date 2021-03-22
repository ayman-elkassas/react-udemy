import React, { Component } from 'react';

class CompLifeCycle extends Component {
    //* the following is arrange of callbacks of lifecycle

    //todo: In mounting or update (constructor,getDerivedStateFromProps,render)
    
    //**********************Basics Calling in mount or update**************** */

    //*0-constructor
    constructor(props) {
        super(props);
        this.state={
            name:"test"
        }

        console.log("LifeCycle Constructor")
    }

    static getDerivedStateFromProps(props,state){
        //auto complete clg for console.log
        console.log("LifeCycle getDerivedStateFromProps");
    }

    //*1-render function to dom

    render() {
        return (
            <div>
                Happy LifeCycle
            </div>
        );
    }

    //*********************In Mounting******************************

    //*2-will mount

    componentWillMount() {
        console.log("LifeCycle will mount");
    }

    //*2-already mounted

    componentDidMount() {
        console.log("LifeCycle already mount");
    }

    //*********************In Updating******************************

    //*3-when change props
    componentWillReceiveProps(nextProps) {

    }

    //*3-when already changing of props or state

    shouldComponentUpdate(nextProps, nextState) {

    }

    //*3-when updated

    componentWillUpdate(nextProps, nextState) {

    }

    //*3-when updated occurred

    componentDidUpdate(prevProps, prevState) {

    }

    //*********************In Removing******************************

    //*3-when removed component direct calling

    componentWillUnmount() {

    }

    //*********************In Error Render******************************

    static getDerivedStateFromError(){

    }

    componentDidCatch(){

    }
    
}

export default CompLifeCycle;