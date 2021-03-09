export function getSelectionSort(array) {
    const animations = [];
    selectionSort(array, animations);
    return animations;
}

function selectionSort(array, animations) {
    for (let i = 0; i < array.length - 1; i++) {
        let smallest = array[i];
        let smallIdx = i;

        for (let j = i + 1; j < array.length; j++) {
            animations.push([smallIdx, j]);
            animations.push([smallIdx, j]);
            animations.push([0, array[0]]);
            animations.push([0, array[0]]);

            if (array[j] < smallest) {
                smallest = array[j];
                smallIdx = j;
            }
        }

        animations.push([i, smallIdx]);
        animations.push([i, smallIdx]);
        animations.push([i, smallest]);
        animations.push([smallIdx, array[i]]);
        let temp = array[i];
        array[i] = smallest;
        array[smallIdx] = temp;
    }
}
