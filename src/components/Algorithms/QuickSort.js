export const quickSort = (arr) => {
    let animations = [];
    helper(arr, 0, arr.length - 1, animations);
    return animations;

}

const helper = (arr, start, end, animations) => {
    if (start >= end) return;

    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
        animations.push([left, right]);

        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            animations.push([[left, arr[right]], [right, arr[left]]]);

            animations.push([left, right]);

            swap(arr, left, right);
        } else {
            animations.push([[left, arr[left]], right, arr[right]]);

        }

        if (arr[left] <= arr[pivot]) left++;

        if (arr[right] >= arr[pivot]) right--;
    }

    animations.push([pivot, right]);

    animations.push([[right, arr[pivot]], [pivot, arr[right]]]);

    animations.push([pivot, right]);

    swap(arr, pivot, right);

    helper(arr, start, right - 1, animations);
    helper(arr, right + 1, end, animations);

}

let swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
