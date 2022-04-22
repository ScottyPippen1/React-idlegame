import React, { useEffect, useState } from 'react'

let Inventory = () => {
    let [logCount, setLogCount] = useState(0)

    useEffect(() => {

        //get local storage
        let logCount = JSON.parse(localStorage.getItem('logCount'));
        if (logCount) {
            setLogCount(logCount);
        }
        localStorage.setItem('logCount', JSON.stringify(logCount));
    }, [])

    return (
        <div>
            <div>{logCount}</div>
        </div>
    )
}
export default Inventory