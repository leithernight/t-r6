import React, {useState, useEffect} from 'react';
function Clicker() {
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(false);
    const inc = () => {
        setCount(count + 1);
    };
    const dec = () => {
        setCount(count - 1);
    };

    useEffect(() => {
        if (start) {
            const timer = setInterval(() => {
                setCount(count + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [start, count]);

    return (
        <div className='Clicker'>
            <button onClick={inc}>+</button>
            <p>{count}</p>
            <button onClick={dec}>-</button>
            <button style={{display: "block"}} onClick={() => setStart(true)}>Start</button>
            <button style={{display: "block"}} onClick={() => setStart(false)}>Stop</button>
        </div>
    );
}

export default Clicker;