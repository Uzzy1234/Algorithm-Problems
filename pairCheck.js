//Given an array, return the number of number-pairs(in 2's) in the array.
//Example: [3, 4, 6, 3, 5, 5, 7, 6] should return 3

function pairCheck(arr) {
    var output_num = 0
    for (i = 0; i <= arr.length; i++) {
      for (j = 0; j <= arr.length; j++) {
        if (arr[i] == arr[j]) {
          output_num++
          arr.splice(i, 1)
          arr.splice(j, 1)
          
      }
      }
    }
    return output_num
  }
  
// console.log(pairCheck([5, 5, 6, 5, 5, 5, 5, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]))