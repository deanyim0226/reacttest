import React from "react";

let Product = (props) =>{

    return(
    <>
    <h1>
        Product name is {props.name} 
        <br>
        </br>
        Product price is {props.price}

    </h1>
    </>
    )
} 

export default Product