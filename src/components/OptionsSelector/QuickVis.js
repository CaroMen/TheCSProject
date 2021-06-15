import React, { useState } from 'react';
import { quickSort } from "../Algorithms/QuickSort"
import animator from '../../animator';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './visualizer.css';

const QuickVis = () => {
    const [arr, setArr] = useState([]);
    const [btnSelected, setBtnSelected] = useState();

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(randomNum(5, 200));
    }

    const quickSorter = (e) => {
        setBtnSelected(e.target);
        setTimeout(() => {
            const animations = quickSort(array.slice());
            animator(animations);
        }, 300)
    }

    return (
        <div className="visualizer-container">
            <div className="select-size">
                <label>Choose array size to display the sorting visualizer:</label>
                <Slider
                    className="slider"
                    onChange={(val) => setArr([...arr, val])}
                    min={5}
                    max={35}
                ></Slider>
            </div>
            <div>
                {array.map((val, i) => (
                    <div className="array-bar" key={i} style={{ height: `${val}px`, backgroundColor: '#BB86FC' }}></div>
                ))}
            </div>
            <div className="sort-btn" onClick={(e) => quickSorter(e)}>Quick Sort</div>
        </div>
    )
}

export default QuickVis
