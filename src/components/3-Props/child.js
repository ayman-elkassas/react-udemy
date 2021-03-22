import React from 'react';

function Child(props) {
    return (
        <div>
            {/* if should passing parameters to handler props should make
            it in body of arrow function as following */}
            <button onClick={()=>{props.parentHandler("Child")}}>Get Parent</button>
        </div>
    );
}

export default Child;