//Given an array, and a number, find the index of that number, in the array.
//Return -1 if it's not found

function linearSearch(arr, num) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == num) {
            return i
        }
    }
    return -1
}


//console.log(linearSearch([1, 2, 5, 3, 3, 2, 7], 7))