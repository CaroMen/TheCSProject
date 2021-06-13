export const bubbleSort = (arr, animations = []) => {
    let isSorted = false;
    let counter = 1;
    while (!isSorted) {
        isSorted = true;

        for (let i = 0; i < arr.length - counter; i++) {
            let pointerA = i;
            let pointerB = i + 1;

            // first animation, grab the first two we'll change the color of
            animations.push([pointerA, pointerB]);

            if (arr[i] > arr[i + 1]) {
                // animates the swap
                animations.push([
                    [i, arr[i + 1]],
                    [i + 1, arr[i]],
                ]);
                animations.push([pointerA, pointerB]);

                swap(arr, pointerA, pointerB);
                isSorted = false;
            } else {
                animations.push([[pointerA, arr[i]], [pointerB, arr[i + 1]]]);
                animations.push([pointerA, pointerB]);
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
