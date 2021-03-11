export function getMergeSort(arr) {
    let animations = [];
    if (arr.length <= 1) return arr;
    let temp = arr.slice();
    mergeSort(arr, 0, arr.length - 1, temp, animations);
    return animations;
}

function mergeSort(arr, start, end, temp, animations) {
    if (start === end) return;
    // let midIdx = Math.floor((start + end) / 2);
    const midIdx = Math.floor((start + end) / 2);
    mergeSort(temp, start, midIdx, arr, animations);
    mergeSort(temp, midIdx + 1, end, arr, animations);
    merge(arr, start, midIdx, end, temp, animations);
}

function merge(arr, start, midIdx, end, temp, animations) {
    let j = midIdx + 1;
    let i = start;
    let k = start;

    while (i <= midIdx && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);

        if (temp[i] <= temp[j]) {
            animations.push([k, temp[i]]);
            arr[k++] = temp[i++];
        } else {
            animations.push([k, temp[j]]);
            arr[k++] = temp[j++];
        }
    }

    while (i <= midIdx) {
        animations.push([k, i]);
        animations.push([k, i]);
        animations.push([k, temp[i]]);
        arr[k++] = temp[i++];
    }

    while (j <= end) {
        animations.push([k, j]);
        animations.push([k, j]);
        animations.push([k, temp[j]]);
        arr[k++] = temp[j++];
    }
}
