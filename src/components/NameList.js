import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Pramila',
            age: 22,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Ankita',
            age: 23,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Pratiksha',
            age: 23,
            skill: 'Python'
        }
    ]
    // 5th approcah
    // key={person.id} this is for unique is generation
    // key props are not accessible in the child componenents
    const personList = persons.map(person => <Person key={person.id} person={person}></Person>)
     return <div>{personList}</div>
}
        // 4th Approach
        // <h2>
        //     I am {person.name}. I am {person.age} years old. I do code in {person.skill}
        // </h2>

    // 3rd Approach
    // const names = ['Pramila','Pratiksha','Ankita']
    // const nameList = names.map(name => <h2>{name}</h2>)
    // return <div>{nameList}</div>
      
    
    
    // <div>
            
        // nameList
            
        //     {/* 1st Approach By Using map{
        //         names.map(name => <h2>{name}</h2>)
        //     } */}
        //     {/* @nd Approach Calling Array
        //      <h2>{names[0]}</h2>
        //     <h2>{names[1]}</h2>
        //     <h2>{names[2]}</h2> */}
        // </div>

    


export default NameList