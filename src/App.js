import React from 'react';
import logo from './logo.svg';
import './App.css';
// We can change Greet to any name, It doesn't matter but the path should be correct
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import ListAndKey from './components/ListAndKey'
import './App.css'
import Form from './components/Form'

function App() {
  return (
    <div className="App">
      {/* Functional Component */}
      {/* Component Reusing */}
      {/* <Greet name='Pramila' field='from IT Field'>
         <p>This is Children's Props</p>
       </Greet>
       <Greet name='Aishwarya' field='from COMPS Field'>
         <button>Action</button>
       </Greet>
       <Greet name='Supriya' field='from EXTC Field'></Greet>  */}
    
      {/* Class Component */}
      {/* Component Reusing */}
     {/* <Welcome name='Pramila' field='from IT Field'></Welcome>
     <Welcome name='Aishwarya' field='from COMPS Field'></Welcome>
     <Welcome name='Supriya' field='from EXTC Field'></Welcome>  */}

     {/* <Hello></Hello> */}

     {/* State and setState */}
     {/* <Message></Message> */}

     {/* <Counter></Counter> */}

      {/* Event Handling */}
     {/* <FunctionClick></FunctionClick> */}
      {/* <ClassClick></ClassClick> */}

      {/* Binding Event Handling 
     <EventBind></EventBind> */}

     {/* Method as Props */}
     {/* <ParentComponent></ParentComponent>  */}

     {/* <UserGreeting></UserGreeting> */}
     {/* <UserGreeting></UserGreeting> */}

     {/* <NameList></NameList> */}

     {/* <ListAndKey></ListAndKey> */}
     <Form></Form>
     </div>
  )
}

export default App;
