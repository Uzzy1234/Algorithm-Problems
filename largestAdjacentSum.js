function largestAdjacentSum(arr) {
    var maxI = 0
    var maxAdjacent = 0
    for (i = 0; i <= arr.length; i++) {
        if (maxAdjacent > maxI) {
            maxAdjacent = maxI
            maxI = 0
        }
        // console.log(maxAdjacent)
        for (j = i; j <= arr.length-2; j+=2) {
            if(j < arr.length) {
                maxI = arr[i] + arr[j+2]
                maxAdjacent = maxI
            }
        }
    }
    return maxAdjacent
}

// console.log(largestAdjacentSum([2, 4, 6, 2, 5]))