//* Arrow Function
let Props=props=>{

    //*cannot update value of props.fname="" that is read only 

    const {fname,lname}=props

    return(
        <h1>Hello React {fname} {lname}</h1>
    )
}

export default Props