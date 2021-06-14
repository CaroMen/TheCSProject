export const selectionSort = (arr) => {
    let animations = [];

    let sortedIndex = 0;

    while (sortedIndex < arr.length - 1) {
        let smallestIndex = sortedIndex;

        for (let i = sortedIndex + 1; i < arr.length; i++) {
            animations.push([sortedIndex, i]);

            animations.push([[sortedIndex, arr[sortedIndex]], [sortedIndex, arr[sortedIndex]]]);

            animations.push([sortedIndex, i]);
            if (arr[i] < arr[smallestIndex]) {
                smallestIndex = i;
            };

        };

        animations.push([sortedIndex, smallestIndex]);

        animations.push([[sortedIndex, arr[smallestIndex]], [smallestIndex, arr[smallestIndex]]]);

        animations.push([sortedIndex, smallestIndex]);

        swap(arr, smallestIndex, sortedIndex);

        sortedIndex++;
    };
    return animations;
}


let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
