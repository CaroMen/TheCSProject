import React, { useState } from 'react';
import { bubbleSort } from "../Algorithms"

let Selector = () => {
    const [arr, setArr] = useState([]);
    const [btnSelected, setBtnSelected] = useState();

    const bubbleSort = (e) => {
        setBtnSelected(e.target);
        setTimeout(() => {
        })
    }

    return (
        <div>
            <div onClick={(e) => bubbleSort(e)}>Bubble Sort</div>
        </div>
    )
}

export default Selector
