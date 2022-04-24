import React, { useEffect, useContext } from "react"
import { ActionContext } from '../Context/ActionContext'

let MineButton = () => {
    const { actionActive, setActionActive, activeSkill, setActiveSkill, oreCount, setOreCount } = useContext(ActionContext);

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
        if (actionActive && activeSkill === 'Mining') {
            console.log(oreCount)
            actionTimeout = setTimeout(() => {
                setOreCount(state => state + 1)
                console.log(actionActive)
            }, 3000)

        } else if (!actionActive) {
            clearTimeout(actionTimeout)
        }
        return () => clearTimeout(actionTimeout)
    }, [oreCount, actionActive, setOreCount, activeSkill])

    let resetOreCount = () => {
        setActiveSkill('');
        setOreCount(0);
        setActionActive(false)
        console.log("reset and stopped")
    };

    let handleToggle = () => {
        console.log(!actionActive)
        if (activeSkill === '') {
            setActiveSkill('Mining');
            setActionActive(true)

        } else {
            setActiveSkill('')
            setActionActive(false)
        }
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