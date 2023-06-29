import React from 'react'

 function Title() {
    console.log(`rendering title`)
    return (
       <h1>use callback hook</h1>
    )
}

export default React.memo(Title)
