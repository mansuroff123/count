import React, { useState } from "react";

function App() {
    const [count, setCount] = useState(0)
    function oshirish() {
        setCount(count + 1)
    }
    // kamayish
    function kamayish() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={kamayish}>-</button>
            <button onClick={oshirish}>+</button>
        </div>
    )
}

export default App;