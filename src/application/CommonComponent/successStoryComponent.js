//7. create SuccessStory as another component, pass this as props in SuccessChild from Success component
import React from "react"

let SuccessStory = (props) => {
 
    const generate = () =>{
        let value = Math.random()
        props.callBackFunc(value)
    };

    return(
        <>
        <b>
            SucceesStory
        </b>
        <button onClick={generate}> send random value </button>

        </>
    )
}

export default SuccessStory

//10. pass a random value from SuccessStory component back to Success