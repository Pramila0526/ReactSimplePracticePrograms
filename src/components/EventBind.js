import React, {Component} from 'react'

class EventBind extends Component{
   constructor(props){
       super(props)

       this.state ={
           message:'Hello User'
       }
    //  Binding in the Class Constructor ..Binding Happens Once in the constructor
    // So it is better compare to binding in Render 
    this.clickHandler = this.clickHandler.bind(this)
   }

   clickHandler()
   {
       this.setState ({
           message:'Thank You'
       })
     console.log(this)
   }

// // Forth Approch is by using Arrou Function to clickHandler function
//    clickHandler=()=>
//    {
//        this.setState ({
//            message:'Thank You'
//        })
//      console.log(this)
//    }

    render(){
        return(
            <div>
                <div>{this.state.message}</div>
                {/* First Approach of Event Binding by .bind() in render()
                <button onClick={this.clickHandler.bind(this)}>Click</button> */}

                {/* Second Approach of Event Binding by Arrow Function in render( )
                <button onClick={() => this.clickHandler()}>Click</button>  */}

                {/* Third Approach(Mostly Used Approach/Best Approach) of Event Binding by Arrow Function  */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind