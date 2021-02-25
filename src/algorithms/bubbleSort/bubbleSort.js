export function bubbleSortAnimation(array) {
    const animations = [];
    bubbleSort(array, animations);
    return animations;
}

function bubbleSort(array, animations) {
    let end = array.length - 1;

    while (end >= 1) {
        for (let j = 0; j < end; j++) {
            if (array[j] > array[j + 1]) {
                // console.log('array:       ', array);

                // gets barOneIdx
                animations.push([j, j + 1]); // grabs two bars

                // gets barTwoIdx
                animations.push([j, j + 1]); // grabs same bars to compare

                // gets index of j and value of j + 1;
                animations.push([j, array[j + 1]]);
                // console.log('array[j]:    ', array[j]);
                // console.log('array[j + 1]:    ', array[j + 1]);

                // moves us up the array
                animations.push([j + 1, array[j]]);
                // console.log('j + 1:      ', array[j + 1]);
                // console.log('array[j]:     ', array[j])
                // console.log();
                // console.log();
                // console.log();

                // needed to swap
                let temp = array[j];
                // console.log('temp:    ', temp);
                array[j] = array[j + 1];
                // console.log('next spot:    ', array[j + 1]);
                array[j + 1] = temp;
                // console.log('new array[j + 1]:     ', array[j + 1]);
            }
        }

        end--;
    }
}

//[404, 170, 272, 54]
// // first animation step
// [404, 170]

// // second animaation step
// [217, 35]

// // third animation step
// [217, 35]

// // fourth animation step
// [35, 217]

// // now we have
// [35, 217, 475, 326]
