import React, {Component} from "react"

export default class UserSignIn extends Component{
    constructor(props){
        super(props)

        this.state = {
            email : React.createRef(), 
            password : React.createRef()
        }

    }

    submit = (event) =>{
        let userName = this.state.email.current.value
        let userPassword = this.state.password.current.value
        
        this.setState({
            email : userName,
            password : userPassword
        })

        event.preventDefault()
    }

    render(){
        console.log("user entered email " + this.state.email)
        console.log("user entered password " + this.state.password)
        return(

            <form action="/signin" onSubmit={this.submit}>
            <b>User Name</b>
            <input type = "text" ref = {this.state.email}></input>
            <b>Password</b>
            <input type ="text" ref = {this.state.password}></input>
            <button type = "submit"> sign in</button>
            </form>
        )
        
    }


}