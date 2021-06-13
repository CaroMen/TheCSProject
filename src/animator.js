const animator = (animation) => {
    let bars = document.getElementsByClassName('array-bar');

    for (let i = 0; i < animation.length; i++) {
        const isColorChange = i % 3 === 0 || i % 3 === 2;

        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animation[i];

            const barOneStyle = bars[barOneIdx].style;
            const barTwoStyle = bars[barTwoIdx].style;

            const color = i % 3 === 0 ? '#b58ec' : '#5de6de';

            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * 300);
        } else {
            setTimeout(() => {
                const [[barOneIdx, barOneHeight], [barTwoIdx, barTwoHeight]] = animation[i];

                const barOneStyle = bars[barOneIdx].style;
                const barTwoStyle = bars[barTwoIdx].style;

                barOneStyle.height = `${barOneHeight}px`;
                barTwoStyle.height = `${barTwoHeight}px`;
            }, i * 300)
        }
    }
}

export default animator;
