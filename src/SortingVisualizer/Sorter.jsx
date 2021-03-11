import React from 'react';
import { bubbleSortAnimation } from '../algorithms/bubbleSort/bubbleSort';
import { getInsertionSort } from '../algorithms/insertionSort/insertionSort.js';
import { getSelectionSort } from '../algorithms/selectionSort/selectionSort';
import { getMergeSort } from '../algorithms/mergseSort/mergeSort';
import { getQuickSort } from '../algorithms/quickSort/quickSort';

import '../SortingVisualizer/Sorter.css'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            showAnalysis: false,
        };

        // this.showBubbleAnalysis = this.showBubbleAnalysis.bind(this);
    }
    componentDidMount() {
        this.arrayReset();
    }

    showAnalysis = (boolean) => {
        this.setState({
            showAnalysis: boolean
        });
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

        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            let colorChanged = i % 4;
            if (colorChanged <= 1) {
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = bars[barOneIdx].style;
                let barTwoStyle = bars[barTwoIdx].style;
                const color = i % 4 === 0 ? '#C55B83' : '#AA71FF';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 8);
            } else {
                setTimeout(() => {
                    let [barOneIdx, height] = animations[i];
                    let barOneStyle = bars[barOneIdx].style;
                    barOneStyle.height = `${height}px`;
                }, i * 8);
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
                const color = i % 4 === 0 ? '#C55B83' : '#AA71FF';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 8);
            } else {
                setTimeout(() => {
                    let [barOneIdx, height] = animations[i];
                    let barOneStyle = bars[barOneIdx].style;
                    barOneStyle.height = `${height}px`;
                }, i * 8);
            }
        }
    }



    selectionSort() {
        const animations = getSelectionSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            let colorChanged = i % 4;
            if (colorChanged <= 1) {
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = bars[barOneIdx].style;
                let barTwoStyle = bars[barTwoIdx].style;
                const color = i % 4 === 0 ? '#C55B83' : '#AA71FF';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 8);
            } else {
                setTimeout(() => {
                    let [barOneIdx, height] = animations[i];
                    let barOneStyle = bars[barOneIdx].style;
                    barOneStyle.height = `${height}px`;
                }, i * 8);
            }
        }
    }

    mergeSort() {
        const animations = getMergeSort(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const bars = document.getElementsByClassName('array-bar');
            let colorChanged = i % 3 !== 2;
            if (colorChanged) {
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = bars[barOneIdx].style;
                let barTwoStyle = bars[barTwoIdx].style;
                const color = i % 3 === 0 ? '#C55B83' : '#AA71FF';

                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 8);
            } else {
                setTimeout(() => {
                    let [barOneIdx, height] = animations[i];
                    let barOneStyle = bars[barOneIdx].style;
                    barOneStyle.height = `${height}px`;
                }, i * 8);
            }
        }
    }

    quickSort() {
        const animatingArray = getQuickSort(this.state.array);
        for (let i = 0; i < animatingArray.length; i++) {
            let arrayBars = document.getElementsByClassName('array-bar');
            const colorChange = i % 4 <= 1;
            if (colorChange) {
                const [barOneIdx, barTwoIdx] = animatingArray[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 4 === 0 ? '#C55B83' : '#AA71FF';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 8);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animatingArray[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 8);
            }
        }
    }

    render() {
        const { array } = this.state;

        return (
            <div className="container">
                <div className="title">
                    AlgoSort
                </div>
                <div className="array-container">
                    {
                        array.map((value, idx) => (
                            <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
                            </div>
                        ))
                    }
                    <div className="buttons">
                        <button className="reset-button" onClick={() => this.arrayReset()}>Generate New Array</button>
                        <button className="bubble-button" onClick={() => this.bubbleSort()}>Bubble Sort</button>
                        <button className="insert-button" onClick={() => this.insertSort()}>Insertion Sort</button>
                        <button className="selection-button" onClick={() => this.selectionSort()}>Selection Sort</button>
                        <button className="merge-button" onClick={() => this.mergeSort()}>Merge Sort</button>
                        <button className="quick-button" onClick={() => this.quickSort()}>Quick Sort</button>
                    </div>
                </div>
                <div className="analysis">
                    <div className="algo">Bubble Sort Analysis</div>
                    <div className="time">Time Complexity: O(n²)</div>
                    <div className="space">Space Complexity: O(1)</div>
                    <div className="algo">Insertion Sort Analysis</div>
                    <div className="time">Time Complexity: O(n²)</div>
                    <div className="space">Space Complexity: O(1)</div>
                    <div className="algo">Selection Sort Analysis</div>
                    <div className="time">Time Complexity: O(n²)</div>
                    <div className="space">Space Complexity: O(1)</div>
                    <div className="algo">Merge Sort Analysis</div>
                    <div className="time">Time Complexity: O(nlogn)</div>
                    <div className="space">Space Complexity: O(n)</div>
                    <div className="algo">Selection Sort Analysis</div>
                    <div className="time">Time Complexity: O(n²)</div>
                    <div className="space">Space Complexity: O(n)</div>
                </div>

            </div>
        );
    }
}

function randomNumGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

        // <button className="bubble-button bubble-analysis" onClick={() => {
            //     this.showAnalysis.bind(null, true), () => this.bubbleSort()
            // }
            // }>Bubble Sort</button>
            // {this.state.showAnalysis && (<div>Shit shet</div>)}

            // <button className="bubble" onClick={this.showAnalysis.bind(null, true)}>Bubble Analysis</button>
            // {this.state.showAnalysis && (
            //     <div className="bubble-analysis">
            //     <div className="b-analysis">
            //         Time Complexity: O(n^2)
            //         </div>
            //     </div>
            // )}
            // <button className="insert-button" onClick={() => this.insertSort()}>Insert Sort</button>
            // <button className="selection-button" onClick={() => this.selectionSort()}>Selection Sort</button>
