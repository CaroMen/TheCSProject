import React, { useState } from 'react';
import { bubbleSort } from "../Algorithms/BubbleSort"
import { animator } from '../../animator';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


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
                <Slider
                    onChange={(val) => {

                        console.log('val', val)
                        setArr(val);
                    }}
                    value={5}
                    min={5}
                    high={80}
                ></Slider>
            </div>
            <div>
                {console.log('arr', arr)}
                {/* {arr.map((val, i) => (
                    <div>
                        {console.log('butthole', val)}
                    </div>
                ))} */}
            </div>
            <div onClick={(e) => bubbleSorter(e)}>Bubble Sort</div>
        </div>
    )
}

export default BubbleVis
