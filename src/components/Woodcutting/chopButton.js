import React, { useEffect, useContext } from "react"
import { ActionContext } from '../../Context/ActionContext'
import TreeDropdown from '../Woodcutting/treeDropdown'

let ChopButton = () => {
    const { actionActive, setActionActive, activeSkill, setActiveSkill, logCount, setLogCount } = useContext(ActionContext);

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
        if (actionActive && activeSkill === 'Woodcutting') {
            console.log(logCount)
            actionTimeout = setTimeout(() => {
                setLogCount(state => state + 1)
                console.log(actionActive)
            }, 3000)

        } else if (!actionActive) {
            clearTimeout(actionTimeout)
        }
        return () => clearTimeout(actionTimeout)
    }, [logCount, actionActive, setLogCount, activeSkill])

    const resetLogCount = () => {
        setActiveSkill('');
        setLogCount(0);
        setActionActive(false)
        console.log("reset and stopped")
    };

    const handleToggle = () => {
        if (activeSkill !== 'Woodcutting') {
            setActiveSkill('Woodcutting');
            setActionActive(true)
            console.log('Started woodcutting')
        } else {
            setActiveSkill('')
            setActionActive(false)
            console.log('Stopped woodcutting')
        }
    }

    return (
        <div>
            <TreeDropdown />
            <div>{logCount}</div>
            <button onClick={handleToggle}>Chop</button>
            <button onClick={resetLogCount}>Reset</button>
        </div>
    )
}
export default ChopButton