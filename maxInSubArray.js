// The following takes an arrary and a number, n, 
// and computes the maximum value of each subarray of length n, 
// and creates an array with those max values

function maxSubArray(arr, n) {
    var result = []
    var max = arr[0]
    var pause = n-1
    var i = 0
    while (i <= arr.length) {
      if (i == pause) {
        result.push(max)
        pause = pause + 1
        i = pause - (pause-1)
        max = 0
      }
      if (arr[i + 1] >= arr[i] && arr[i + 1] >= max) {
        max = arr[i + 1]
      } else if (arr[i] > arr[i+1]&& arr[i] >= max){
          max = arr[i]
      }
      i++
    }
    return result
  }
  
// console.log(maxSubArray([5, 7, 8, 40, 25, 12, 9, 32, 20, 7, 43, 21], 3))