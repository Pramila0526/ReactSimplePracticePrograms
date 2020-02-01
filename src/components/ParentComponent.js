import React, { Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            parentName:'Parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    // so we successfully called the method in the ParentComponent from the button 
    // in ChildComponent by passing the methods as props to the child component
    greetParent(childName){
        // We Used Template Literals here i.e ` ` (backtracks) and $
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render()
    {
        return(
            <div>
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent