import React, { useEffect, useContext, useState } from "react"
import { ActionContext } from '../../Context/ActionContext'
import { SelectedTreeContext } from "../../Context/SelectedTreeContext";
import TreeDropdown from '../Woodcutting/treeDropdown'

let ChopButton = () => {
    const { actionActive, setActionActive, activeSkill, setActiveSkill, logCount, setLogCount } = useContext(ActionContext);
    const [selectedTree, setSelectedTree] = useState('Select a tree')

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
            }, selectedTree)

        } else if (!actionActive) {
            clearTimeout(actionTimeout)
        }
        return () => clearTimeout(actionTimeout)
    }, [logCount, actionActive, setLogCount, activeSkill, selectedTree])

    const resetLogCount = () => {
        setActiveSkill('');
        setLogCount(0);
        setActionActive(false)
        console.log("reset and stopped")
    };

    const handleToggle = () => {
        if (selectedTree === 'Select a tree') {
            alert('Please select a tree')
            return
        }
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
        <SelectedTreeContext.Provider value={{ selectedTree, setSelectedTree }}>
            <div>
                <TreeDropdown />
                <div>{logCount}</div>
                <button onClick={handleToggle}>Chop</button>
                <button onClick={resetLogCount}>Reset</button>
            </div>
        </SelectedTreeContext.Provider>
    )
}
export default ChopButton