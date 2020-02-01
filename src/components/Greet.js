import React from 'react'

// function Greet()
// {
//     return <h1>Hello Pramila!!</h1>
// }

// const Greet = props => {
//     console.log(props)
// return (
// <div><h1>Hello {props.name} {props.field}</h1> {props.children}</div>
// )
// }

//Destructuring Props 

// First Way- is to Destructure it in functiobn parameter Itself
// const Greet = ({name,field}) => {
//     return (
//          <div>
//              <h1>Hello {name} {field}
//              </h1> 
//              </div>
//         )
// }


// Second Way- is to Destructure it in the Function body
const Greet = props => {
    const { name,field }=props
    return (
         <div>
             <h1>Hello {name} {field}
             </h1> 
             </div>
        )
}
// Here we are Exporting Greet Component as a default export from Greet.js
// This allows us to import the component with any name..plz take a look in App.js 
export default Greet


// We can also do it as follows
//export const Greet = () => <h1>Hello Pramila!</h1>
// but in this case we have to import it as
//import {Greet} from './components/Greet' (in App.js)

