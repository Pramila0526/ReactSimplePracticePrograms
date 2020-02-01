import React from 'react'
import Person from './Person'
function ListAndKey() {
    const names = ['Pramila','Pratiksha','Ankita','Pramila']
const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}


export default ListAndKey