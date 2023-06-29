import React, { useState, useMemo } from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    // const isEven = useMemo(() => {
    //     let i = 0
    //     while(i< 2000000000) i++

    //     return counterOne % 2 === 0
    // }, [counterOne])
    const isEven = () => {
        let i = 0
        while(i< 2000000000) i++

        return counterOne % 2 === 0
    }


  return (
    <div>
        <button onClick={incrementCounterOne}>count one - {counterOne}</button>
        <p>{isEven() ? 'Even' : 'odd'}</p>
        {/* <p>{isEven ? 'Even' : 'odd'}</p> */}
        <button onClick={incrementCounterTwo}>count two - {counterTwo}</button>
    </div>
  )
}

export default Counter