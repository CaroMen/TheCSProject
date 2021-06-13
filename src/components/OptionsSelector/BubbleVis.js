import React, { useState } from 'react';
import { bubbleSort } from "../Algorithms/BubbleSort"
import { animator } from '../../animator';

const BubbleVis = () => {
    const [arr, setArr] = useState([]);
    const [btnSelected, setBtnSelected] = useState();

    const bubbleSorter = (e) => {
        setBtnSelected(e.target);
        setTimeout(() => {
            const animations = bubbleSort(arr.slice());
            animator(animations);
        })
    }

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
            <div>
                {arr.map((val, i) => (
                    <div></div>
                ))}
            </div>
            <div onClick={(e) => bubbleSorter(e)}>Bubble Sort</div>
        </div>
    )
}

export default BubbleVis
