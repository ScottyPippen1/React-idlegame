import React, { useEffect, useState } from "react"

let MineButton = () => {
    let [oreCount, setOreCount] = useState(0)
    let [isMining, setIsMining] = useState(false)

    useEffect(() => {
        //get local storage
        let oreCount = JSON.parse(localStorage.getItem('oreCount'));
        if (oreCount) {
            setOreCount(oreCount);
        }
    }, [])

    useEffect(() => {
        let actionTimeout = null
        //save to local storage
        localStorage.setItem('oreCount', JSON.stringify(oreCount));
        if (isMining) {
            console.log(oreCount)
            actionTimeout = setTimeout(() => {
                setOreCount(state => state + 1)
                console.log(isMining)
            }, 3000)

        } else if (!isMining) {
            clearTimeout(actionTimeout)
        }
        return () => clearTimeout(actionTimeout)
    }, [oreCount, isMining])

    let resetOreCount = () => {
        setOreCount(0);
        setIsMining(false)
        console.log("reset and stopped")
    };

    let handleToggle = () => {
        setIsMining(!isMining)
        console.log(!isMining)
    }

    return (
        <div>
            <div>{oreCount}</div>
            <button onClick={handleToggle}>Mine</button>
            <button onClick={resetOreCount}>Reset</button>
        </div>
    )
}
export default MineButton