import React, {useState, useEffect, useRef} from "react";

function setDefaultValue() {
    const userCount = localStorage.getItem('count');
    return userCount ? +userCount : 0;
}

function Clicker2() {
    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setIsCount] = useState(false);
    const timerIdRef = useRef(null);
    const handleStart = () => {
        setIsCount(true);
    }
    const handleStop = () => {
        setIsCount(false);
    }
    const handleReset = () => {
        setCount(0);
        setIsCount(false);
    }

    useEffect(() => {
        localStorage.setItem('count', count);
    }, [count]);

    useEffect(() => {
        if (isCounting) {
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }
        return () => {
            clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        }
    }, [isCounting]);

    return (
        <div className="Clicker">
            <h1>app</h1>
            <h3>{count}</h3>
            {!isCounting ? (
                <button onClick={handleStart}>start</button>
            ) : (
                <button onClick={handleStop}>stop</button>
            )
            }
            <button onClick={handleReset}>reset</button>
        </div>
    )
}

export default Clicker2;