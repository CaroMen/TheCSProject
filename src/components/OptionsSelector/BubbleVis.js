import React, { useState } from 'react';
import { bubbleSort } from "../Algorithms/BubbleSort"
import animator from '../../animator';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './visualizer.css';

const BubbleVis = () => {
    const [arr, setArr] = useState([]);
    const [btnSelected, setBtnSelected] = useState();

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(randomNum(5, 200));
    }

    const bubbleSorter = (e) => {
        setBtnSelected(e.target);
        setTimeout(() => {
            const animations = bubbleSort(array.slice());
            animator(animations);
        }, 300)
    }

    return (
        <div className="visualizer-container">
            <div className="sort-desc">
                <h3 className="sort-title">Bubble Sort</h3>
                <div className="bubble-desc">This sort algorithm is pretty simple. It will compare two items that are side by side and sees which one is out of place.</div>

                <div className="bubble-desc">It will start out with the first two numbers and it will check which one is greater. Once that is decided, the greatest number will be swapped with the smallest number of the two.</div>

                <div className="complexity-desc">
                    <div className="complexity">Time Complexity:</div>
                    <div className="complexity-ans">O(n^2)</div>
                    <div className="space-complexity">Space Complexity:</div>
                    <div className="complexity-ans">O(1)</div>
                </div>
            </div>
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
            <div className="sort-btn" onClick={(e) => bubbleSorter(e)}>Bubble Sort</div>
        </div>
    )
}

export default BubbleVis
