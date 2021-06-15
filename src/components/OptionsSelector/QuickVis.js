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
                <h3 className="sort-title">Quick Sort</h3>
                <div className="bubble-desc">This sort algorithm is a divide and conquer algorithm. There will be two empty arrays created intended to hold elements less than the pivot value and greater than the pivot value, which will then be sorted recursively.</div>

                <div className="bubble-desc">There are three important things we need to do to for this algorithm to work.</div>

                <div className="bubble-desc steps">1. Determine the pivot point in the array.</div>

                <div className="bubble-desc steps">2. Create a pointer for the first item in the array.</div>

                <div className="bubble-desc steps">3. Create a pointer for the last item in the array.</div>

                <div className="bubble-desc">We increment our left pointer while our current value is less than the pivot value. We continue this until the left pointer is greater than or equal to the pivot value.</div>

                <div className="bubble-desc">We decrement our right pointer while our current value is greater than the pivot value. We continue this until the right pointer is less than or equal to the pivot value.</div>

                <div className="bubble-desc">Once our pointers have crossde, meaning the left pointer is less than or equal to the right pointer, we swap the values.</div>

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
            <div className="sort-btn" onClick={(e) => quickSorter(e)}>Quick Sort</div>
        </div>
    )
}

export default QuickVis
