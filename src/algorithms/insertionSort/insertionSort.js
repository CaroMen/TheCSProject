export function getInsertionSort(array) {
    const animations = [];
    insertSort(array, animations);
    return animations;
}

function insertSort(array, animations) {
    for (let i = 0; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            animations.push([j, j - 1]);
            animations.push([j, j - 1]);
            animations.push([j - 1, array[j]]);
            animations.push([j, array[j - 1]]);

            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
            j--;
        }
    }
}
