import React, {useState, useEffect} from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';

function DocTitle() {
    const [count, setCount] = useState(0);
    useDocumentTitle(count);
    // useEffect(() => {
    //     document.title = `count ${count}`
    //     console.log(`component re-rendered`);
    // }, [count])

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>count - {count}</button>
    </div>
  )
}

export default DocTitle