import React, { useState } from 'react';
import { insertionSort } from "../Algorithms/InsertionSort"
import animator from '../../animator';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './visualizer.css';

const InsertionVis = () => {
    const [arr, setArr] = useState([]);
    const [btnSelected, setBtnSelected] = useState();

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let array = [];
    for (let i = 0; i < arr.length; i++) {
        array.push(randomNum(5, 200));
    }

    console.log('butt', insertionSort);

    const insertionSorter = (e) => {
        setBtnSelected(e.target);
        setTimeout(() => {
            const animations = insertionSort(array.slice());
            animator(animations);
        }, 300)
    }

    return (
        <div className="visualizer-container">
            <div className="sort-desc">
                <h3 className="sort-title">Insertion Sort</h3>
                <div className="bubble-desc">This sort algorithm focuses on a sub-list of an array. An insertion sort algorithm will make sure the sub-list is sorted before moving on to the end of an unsorted array. </div>

                <div className="bubble-desc">We start out with the first two numbers of an array. We compare the two and make sure the first number is less than the second number. If this isn't the case, we swap out the two numbers.</div>

                <div className="bubble-desc">Once the first two numbers are sorted, we compare the second number and the third number in the array. We follow the same pattern and swap them if the second number is greater than the third number.</div>

                <div className="bubble-desc">Before we move on to check the third and fourth number, we have to do what makes insertion sort unique. So far, we've checked the first, second, and third number. According to what we've done, these numbers should be sorted, but that's not always the case. There could be a situation where we have something like this:</div>

                <div className="bubble-desc arr-ex">[10, 19, 14, ...]</div>

                <div className="bubble-desc">As you can see, this is not sorted. In this situation, insertion sort should go back to the sub-list and swap the numbers that are not in the right order. It's important for the algorithm to make sure the sub-list is sorted after swapping.</div>

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
            <div className="sort-btn" onClick={(e) => insertionSorter(e)}>Insertion Sort</div>
        </div>
    )
}

export default InsertionVis
