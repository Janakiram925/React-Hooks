import React, {useState, useEffect} from 'react'
import useDocumentTitle from './hooks/useDocumentTitle';

function DocTitleTwo() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = `count ${count}`
    //     console.log(`component re-rendered`);
    // }, [count])
    useDocumentTitle(count);
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>count - {count}</button>
    </div>
  )
}

export default DocTitleTwo