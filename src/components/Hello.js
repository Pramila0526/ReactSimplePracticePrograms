import React, { createContext } from 'react'


const Hello = () => {
// With JSX Component - JSX makes your react code simple and elegant
//return (
//     <div classname='practiceClass>
// <h1>Hello Welcome!!</h1>
// </div>
// )

// Without Using JSX
return React.createElement('div',
{id:'Hello', className:'practiceClass'},
React.createElement('h1',null,'Hello Use!!'))
}

// Here we are Exporting Greet Component as a default export from Greet.js
// This allows us to import the component with any name..plz take a look in App.js 
export default Hello
