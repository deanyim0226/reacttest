import React from "react";
import { Component } from "react";
import SuccessChild from "./successChildComponent";
import SuccessStory from "./successStoryComponent";

export default class Success extends Component{

    constructor(props){
        super(props)

        this.state ={
            value : 0
        }
    }

    executedByChild = (dataFromChild) =>{
        this.setState({
            value: dataFromChild
        })
    }

    render(){
        console.log("Random value from success story is " + this.state.value)
        return(
        <>
        <h1>THIS IS COMING FROM SUCCESS COMPONENT</h1>

        <SuccessChild name = {"Daniel"} address ={"Irvine California"}>
        </SuccessChild>
        
        <SuccessStory callBackFunc = {this.executedByChild}>
        </SuccessStory>
        </>
        )
    }


    
}