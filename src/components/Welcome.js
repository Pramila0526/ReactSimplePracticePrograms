import React,{Component} from 'react'

class Welcome extends Component{
    render()
    {
      return  <h1>Welcome {this.props.name} {this.props.field}</h1>
    }
}

// Destructuring th props and state
// class Welcome extends Component{
//   render()
//   {
//     const {name,field} = this.props
//      // const {state1,state2}=this.state
//     return  <h1>Welcome {name} {field}</h1>
//   }
// }
export default Welcome