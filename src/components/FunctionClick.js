import React from 'react'

function functionClick(){
    function clickHandler()
    {
        console.log('Button Clicked')
    }
    return(
        <div>
            <button onClick={clickHandler}>FunctionClick</button>
        </div>
    )
}

export default functionClick