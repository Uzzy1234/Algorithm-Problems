// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function numCheck(array1, total_num) {

    for (i = 0; i < array1.length; i++) {
        for (j = i + 1; j < array1.length; j++) {
            console.log(array1[i], array1[j], total_num)
            if (array1[i] + array1[j] == total_num) return true
        }
    }
    return false
}

//console.log(numCheck([1, 2, 5, 3], 10))
