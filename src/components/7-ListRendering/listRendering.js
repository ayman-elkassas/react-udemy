import React from 'react';
import Person from './person'
function ListRendering(props) {

    const names=[
        {
            id:1,
            name:"ayman",
            age:25
        },
        {
            id:2,
            name:"ahmed",
            age:48
        },
        {
            id:3,
            name:"ali",
            age:33
        },
    ]

    const nameList=names.map((person,key)=>{
        return (
            //* key is very important to help react to improve adding or remove, update
            <div key={key}>
                <Person person={person}/>
            </div>
        )
    })

    return (
        <div>
            {nameList}
        </div>
    );
}

export default ListRendering;