import React, { Component} from 'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoggedIn:false
        }
    }
    render(){
        // 4) Short Circuit Operator
        return this.state.isLoggedIn && <div>Welcome Pramila!!</div>
        
        // 3) Ternery Conditional Approach
        // return(
        //     this.state.isLoggedIn ?
        //     <div>Welcome Pramila!!</div> :
        //     <div>Welcome Guest!!</div>
        // )

        // 2) Element Variables Approach
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Pramila!!</div>
        // }else{
        //     message = <div>Welcome Guest!!</div>
        // }
        // return <div>{message}</div>


        // 1) if/else Approach
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>Welcome Pramila!!</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest!!</div>
        //     )
        // }
    }
}

export default UserGreeting