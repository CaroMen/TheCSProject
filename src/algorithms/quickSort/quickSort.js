export function getQuickSort(arr) {
    const animations = [];
    let start = 0;
    let end = arr.length - 1;
    quickSort(arr, start, end, animations);
    return animations;
}

function quickSort(arr, start, end, animations) {
    if (start >= end) return;
    let pivot = divide(arr, start, end, animations);
    quickSort(arr, start, pivot - 1, animations);
    quickSort(arr, pivot + 1, end, animations);
}

function divide(arr, start, end, animations) {

    let pivot = arr[start];
    let isTrue = true;
    let min = start + 1;

    while (isTrue) {
        while (arr[min] <= pivot && min <= end) {
            animations.push([start, min]);
            animations.push([start, min]);
            animations.push([0, arr[0]]);
            animations.push([0, arr[0]]);
            min += 1;
        }
        while (arr[end] >= pivot && min <= end) {
            animations.push([start, end]);
            animations.push([start, end]);
            animations.push([0, arr[0]]);
            animations.push([0, arr[0]]);
            end -= 1;
        }
        if (end < min) {
            isTrue = false;
        } else {
            animations.push([min, end]);
            animations.push([min, end]);
            animations.push([min, arr[end]]);
            animations.push([end, arr[min]]);
            let temp = arr[min];
            arr[min] = arr[end];
            arr[end] = temp;
        }
    }
    animations.push([start, end]);
    animations.push([start, end]);
    animations.push([start, arr[end]]);
    animations.push([end, pivot]);
    let temp = arr[end];
    arr[min] = pivot;
    arr[start] = temp;
    return end;

}
