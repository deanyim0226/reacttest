
import React, {Component} from "react"
import Success from "./CommonComponent/successComponent"
import SuccessChild from "./CommonComponent/successChildComponent"
import UserSignIn from "./CommonComponent/userSignInComponent"
import Product from "./CommonComponent/productComponent"

export default class Application extends Component{
    constructor(props){
        super(props)
        //data object to apply changes in react component
        //and call render method to create virtual dom
    
    }
    render(){
        //return JSX code html + javascript creating a virtual dom
        return(
            <>
            
                <Success>

                </Success>

                <Product name = "SK2" price = "$999">

                </Product>
                <UserSignIn>

                </UserSignIn>
                
            </>
        )
    }
}