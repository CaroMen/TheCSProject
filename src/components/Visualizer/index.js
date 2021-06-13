import React from 'react';


const Sorter = () => {

    return (
        <div>
            <div className="select-size">
                <label>Choose Array Size</label>
                <input
                    type="range"
                    min="5"
                    high="80"
                    step="2"
                ></input>
            </div>
        </div>
    )
}

export default Sorter
