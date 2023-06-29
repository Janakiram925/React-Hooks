import React from 'react'

function Child(props) {
    return (
        <div>
            {props.name}
            <button onClick = {() => props.greetHandler('from child component')}>wish parent</button>
        </div>
    )
}

export default Child
