import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {

    greetParent = (childMessage) => {
        alert(`hello parent ${childMessage}`)
    }
    render() {
        return (
            <div>
                <Child name = "ram" greetHandler = {this.greetParent}/>
            </div>
        )
    }
}

export default Parent
