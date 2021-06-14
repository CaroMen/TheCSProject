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
            <div className="sort-desc">
                <h3 className="sort-title">Selection Sort</h3>
                <div className="bubble-desc">This sort algorithm is another simple one. This time however, we don't compare the first two numbers that are side by side.</div>

                <div className="bubble-desc">We start out with the first number and check the rest of the array to see if there's a number smaller than the first number. If there is, we swap the two. Then we move to the second number and check the rest of the array to see if there's a number smaller than the second number. If there is we swap them. If there isn't, we leave the second number there and move on to the third number. We continue this pattern until the entire array is sorted.</div>

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
                    <div className="array-bar" key={i} style={{ height: `${val}px`, backgroundColor: '#ECD8E0' }}></div>
                ))}
            </div>
            <div className="sort-btn" onClick={(e) => quickSorter(e)}>Selection Sort</div>
        </div>
    )
}

export default QuickVis
