import React, { useState } from 'react'
import { SelectedTreeContext } from '../../Context/SelectedTreeContext'
import { trees } from '../../globals/gameConstants'

const TreeDropdown = () => {
    let [selectedTree, setSelectedTree] = useState('Select a tree')

    let handleTreeChange = (e) => {
        setSelectedTree(e.target.value)
        console.log(selectedTree)
    }

    return (
        <>
            <SelectedTreeContext.Provider value={{ selectedTree }}>
                <div>{selectedTree}</div>
                <select onChange={handleTreeChange}>
                    <option value='Select a tree'>
                        -- Select a tree --
                    </option>
                    {trees.map((selectedTree, index) => <option value={index}>{selectedTree.type}</option>)}
                </select>
            </SelectedTreeContext.Provider>
        </>
    )
}

export default TreeDropdown