export const insertionSort = (arr) => {
    let animations = [];

    for (let i = 0; i < arr.length; i++) {
        let j = i;

        while (j > 0 && arr[j] < arr[j - 1]) {
            animations.push([j, j - 1]);

            if (arr[j] < arr[j - 1]) {
                animations.push([[j, arr[j - 1], [j - 1], arr[j]]]);

                animations.push([j, j - 1]);
                swap(arr, j, j - 1);
            } else {
                animations.push([[j, arr[j], [j, arr[j]]]]);
                animations.push([j, j - 1]);
            }
            j--;
        }
    }

    return animations;
}


let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
