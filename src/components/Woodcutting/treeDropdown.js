import React, { useContext } from 'react'
import { SelectedTreeContext } from '../../Context/SelectedTreeContext'
import { trees } from '../../globals/gameConstants'

const TreeDropdown = () => {
    const { selectedTree, setSelectedTree } = useContext(SelectedTreeContext);

    let handleTreeChange = (e) => {
        setSelectedTree(e.target.value)
        console.log(selectedTree)
    }

    return (
        <>
            <div>{selectedTree}</div>
            <select onChange={handleTreeChange}>
                <option value='Select a tree'>
                    -- Select a tree --
                </option>
                {trees.map((selectedTree) => <option value={selectedTree.intervalSpeed}>{selectedTree.type}</option>)}
            </select>
        </>
    )
}

export default TreeDropdown