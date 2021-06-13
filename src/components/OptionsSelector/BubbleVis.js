import React, { useState } from 'react';
import { bubbleSort } from "../Algorithms/BubbleSort"
import { animator } from '../../animator';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './visualizer.css';

const BubbleVis = () => {
    const [arr, setArr] = useState([]);
    const [btnSelected, setBtnSelected] = useState();

    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let barHeight = [];
    for (let i = 0; i < arr.length; i++) {
        barHeight.push(randomNum(5, 200));
    }

    const bubbleSorter = (e) => {
        setBtnSelected(e.target);
        setTimeout(() => {
            const animations = bubbleSort(arr.slice());
            animator(animations);
        })
    }

    return (
        <div className="visualizer-container">
            <div className="select-size">
                <label>Choose Array Size</label>
                <Slider
                    onChange={(val) => setArr([...arr, val])}
                    min={5}
                    high={80}
                ></Slider>
            </div>
            <div>
                {console.log('arr', arr)}
                {barHeight.map((val, i) => (
                    <div className="array-bar" key={i} style={{ height: `${val}px`, backgroundColor: 'blueviolet' }}></div>
                ))}
            </div>
            <div onClick={(e) => bubbleSorter(e)}>Bubble Sort</div>
        </div>
    )
}

export default BubbleVis
