import React, { useEffect, useState, useContext } from "react"
import { ActionContext } from '../Context/ActionContext'

let ChopButton = () => {
    const { logCount, setLogCount } = useContext(ActionContext);
    const [actionActive, setActionActive] = useState(false)

    useEffect(() => {
        //get local storage
        const logCount = JSON.parse(localStorage.getItem('logCount'));
        if (logCount) {
            setLogCount(logCount);
        }
    }, [setLogCount])

    useEffect(() => {
        let actionTimeout = null
        //save to local storage
        localStorage.setItem('logCount', JSON.stringify(logCount));
        if (actionActive) {
            console.log(logCount)
            actionTimeout = setTimeout(() => {
                setLogCount(state => state + 1)
                console.log(actionActive)
            }, 3000)

        } else if (!actionActive) {
            clearTimeout(actionTimeout)
        }
        return () => clearTimeout(actionTimeout)
    }, [logCount, actionActive, setLogCount])

    const resetLogCount = () => {
        setLogCount(0);
        setActionActive(false)
        console.log("reset and stopped")
    };

    const handleToggle = () => {
        setActionActive(!actionActive)
        console.log(!actionActive)
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