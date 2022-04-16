import React, { useEffect, useState } from "react"

let ChopButton = () => {
    let [logCount, setLogCount] = useState(0)
    let [isChopping, setIsChopping] = useState(false)

    useEffect(() => {
        //get local storage
        let logCount = JSON.parse(localStorage.getItem('logCount'));
        if (logCount) {
            setLogCount(logCount);
        }
    }, [])

    useEffect(() => {
        let actionTimeout = null
        //save to local storage
        localStorage.setItem('logCount', JSON.stringify(logCount));
        if (isChopping) {
            console.log(logCount)
            actionTimeout = setTimeout(() => {
                setLogCount(state => state + 1)
                console.log(isChopping)
            }, 3000)

        } else if (!isChopping) {
            clearTimeout(actionTimeout)
        }
        return () => clearTimeout(actionTimeout)
    }, [logCount, isChopping])

    let resetLogCount = () => {
        setLogCount(0);
        setIsChopping(false)
        console.log("reset and stopped")
    };

    let handleToggle = () => {
        setIsChopping(!isChopping)
        console.log(!isChopping)
    }

    return (
        <div>
            <div>{logCount}</div>
            <button onClick={handleToggle}>Chop</button>
            <button onClick={resetLogCount}>Reset</button>
        </div>
    )
}
export default ChopButton