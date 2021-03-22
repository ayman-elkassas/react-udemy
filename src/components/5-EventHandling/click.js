import React from 'react';

function Click(props) {

    //*arrow function understand this object
    let clickHandler=()=>{
        console.log(this)
        console.log("Button Clicked")
    }

    //* normal function to use <this></this> as object should bind this in call


    return (
        <div>
            <button onClick={clickHandler}>Click Arrow</button>
        </div>
    );
}

export default Click;