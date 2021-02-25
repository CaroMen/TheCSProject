import React from 'react';
import { bubbleSortAnimation } from '../algorithms/bubbleSort/bubbleSort';
import { getInsertionSort } from '../algorithms/bubbleSort/insertionSort.js';
// src/algorithms/bubbleSort/insertionSort.js
import '../SortingVisualizer/Sorter.css'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.arrayReset();
    }

    arrayReset() {
        const array = [];
        for (let i = 0; i < 50; i++) {
            array.push(randomNumGenerator(5, 700));
        }
        this.setState({ array });
    }

    bubbleSort() {
        const animations = bubbleSortAnimation(this.state.array);
        console.log(animations);

        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            let colorChanged = i % 4;
            if (colorChanged <= 1) {
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = bars[barOneIdx].style;
                let barTwoStyle = bars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'mediumslateblue' : 'lightcoral';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            } else {
                setTimeout(() => {
                    let [barOneIdx, height] = animations[i];
                    let barOneStyle = bars[barOneIdx].style;
                    barOneStyle.height = `${height}px`;
                }, i * 2);
            }

        }
    }

    insertSort() { // space: O(1) time: O(n^2)
        const animations = getInsertionSort(this.state.array);

        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            let colorChanged = i % 4;
            if (colorChanged <= 1) {
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = bars[barOneIdx].style;
                let barTwoStyle = bars[barTwoIdx].style;
                const color = i % 4 === 0 ? 'mediumslateblue' : 'lightcoral';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 2);
            } else {
                setTimeout(() => {
                    let [barOneIdx, height] = animations[i];
                    let barOneStyle = bars[barOneIdx].style;
                    barOneStyle.height = `${height}px`;
                }, i * 2);
            }
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div className="bar-container">
                <div className="array-container">
                    {
                        array.map((value, idx) => (
                            <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
                            </div>
                        ))
                    }
                    <button className="sorting-button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="sorting-button" onClick={() => this.insertSort()}>Insert Sort</button>
                </div>

            </div>
        );
    }
}

function randomNumGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
