import React from "react";

//6. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
let SuccessChild = (props) =>{

    return(
        <>
        <h1>
            My name - {props.name} 
            <br></br>
            My address - {props.address} 
            <br></br>
          
        </h1>
        </>
    )
}


export default SuccessChild