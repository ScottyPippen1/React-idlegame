import React, { useEffect, useState, useContext } from "react"
import { ActionContext } from '../Context/ActionContext'

let MineButton = () => {
    const { oreCount, setOreCount } = useContext(ActionContext);
    const [actionActive, setActionActive] = useState(false)

    useEffect(() => {
        //get local storage
        let oreCount = JSON.parse(localStorage.getItem('oreCount'));
        if (oreCount) {
            setOreCount(oreCount);
        }
    }, [setOreCount])

    useEffect(() => {
        let actionTimeout = null
        //save to local storage
        localStorage.setItem('oreCount', JSON.stringify(oreCount));
        if (actionActive) {
            console.log(oreCount)
            actionTimeout = setTimeout(() => {
                setOreCount(state => state + 1)
                console.log(actionActive)
            }, 3000)

        } else if (!actionActive) {
            clearTimeout(actionTimeout)
        }
        return () => clearTimeout(actionTimeout)
    }, [oreCount, actionActive, setOreCount])

    let resetOreCount = () => {
        setOreCount(0);
        setActionActive(false)
        console.log("reset and stopped")
    };

    let handleToggle = () => {
        setActionActive(!actionActive)
        console.log(!actionActive)
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