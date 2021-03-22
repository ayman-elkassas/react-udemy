import React from 'react';
import './style.css'

function styleSheet(props) {
    return (
        <div>
            <h1 className={`${props.primary} font-xl`}>Style Sheet</h1>
        </div>
    );
}

export default styleSheet;