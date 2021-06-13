export const animator = (animation) => {
    let bars = document.getElementsByClassName('bar');

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
                const [barOneIdx, newHeight] = animation[i];
                const barOneStyle = bars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            })
        }
    }
}
