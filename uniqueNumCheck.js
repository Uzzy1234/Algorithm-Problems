//Given an array, return the number of unique elements in that array

function uniqueNumCheck(arr) {
    freqCheckObj = {}
    for (element of arr) {
        (freqCheckObj[element] > 0) ? freqCheckObj[element]++ : freqCheckObj[element] = 1
    }
    return Object.values(freqCheckObj).length
}

//console.log(uniqueNumCheck([1, 2, 5, 3, 3, 2, 7]))