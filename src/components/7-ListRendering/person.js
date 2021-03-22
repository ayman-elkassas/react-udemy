import React from 'react';

//* can make object destructuring direct on parameter {person} not props

function Person({person}) {
    return (
        <div>
            my name is {person.name}, i am {person.age} years old
        </div>
    );
}

export default Person;