export const bubbleSort = (arr, animations = []) => {
    let isSorted = false;
    let counter = 1;
    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < arr.length - 1 - counter; i++) {
            let pointerA = arr[i];
            let pointerB = arr[i + 1];

            // first animation, grab the first two we'll change the color of
            animations.push([pointerA, pointerB]);

            if (pointerA > pointerB) {
                // animates the swap
                animations.push([[i, pointerB], [i + 1, pointerA]]);
                animations.push()

                swap(arr, i, i + 1);
                isSorted = false;
            } else {
                animations.push([[i, pointerA], [i + 1, pointerB]]);
                animations.push([i, i + 1]);
            }
        }
        counter++;
    }
    return animations;
}


let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
