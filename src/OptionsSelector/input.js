import React, { useState } from 'react';


let Selector = () => {
    const [arr, setArr] = useState([]);
    const [btnSelected, seBtnSelected] = useState();

    const bubbleSort = (e) => {
        setBtnSelected(e.target);
    }

    return (
        <div>
            <div onClick={(e) => bubbleSort(e)}>Bubble Sort</div>
        </div>
    )
}

export default Selector
