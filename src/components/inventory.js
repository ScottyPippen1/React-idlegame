import React, { useContext } from 'react'
import { ActionContext } from '../Context/ActionContext'

let Inventory = () => {
    const { logCount, oreCount } = useContext(ActionContext);

    return (
        <div>
            <h1>Logs: {logCount}</h1>
            <h1>Ore: {oreCount}</h1>
        </div>
    )
}
export default Inventory