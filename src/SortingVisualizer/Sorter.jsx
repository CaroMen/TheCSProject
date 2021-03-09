import React from 'react';
import { bubbleSortAnimation } from '../algorithms/bubbleSort/bubbleSort';
import { getInsertionSort } from '../algorithms/insertionSort/insertionSort.js';
import { getSelectionSort } from '../algorithms/selectionSort/selectionSort';

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
        // this.bubbleSort();
        // this.props.onClick();
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
                const color = i % 4 === 0 ? '#C55B83' : '#AA71FF';

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
                const color = i % 4 === 0 ? '#C55B83' : '#AA71FF';

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

    // bubbleSortWrapper = () => {
    //     this.showAnalysis.bind(null, true);
    //     { this.state.showAnalysis && (<div>Shit shet</div>) }
    //     this.bubbleSort();
    // }

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
                        <button className="insert-button" onClick={() => this.insertSort()}>Insert Sort</button>
                        <button className="selection-button" onClick={() => this.selectionSort()}>Selection Sort</button>
                    </div>
                </div>
                <div className="analysis">
                    <div className="algo">Bubble Sort Analysis</div>
                    <div className="time">Time Complexity: O(n²)</div>
                    <div className="space">Space Complexity: O(1)</div>
                    <div className="algo">Insert Sort Analysis</div>
                    <div className="time">Time Complexity: O(n²)</div>
                    <div className="space">Space Complexity: O(1)</div>
                    <div className="algo">Selection Sort Analysis</div>
                    <div className="time">Time Complexity: O(n²)</div>
                    <div className="space">Space Complexity: O(1)</div>
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
