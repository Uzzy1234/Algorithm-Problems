//optimised bubbleSort algorithm, optimised for "almost sorted" arrays,
// so that it doesnt take as much time

function bubbleSort(arr) {
    for (i = 0; i < arr.length; i++) {
      var noSwaps = true
      for (j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          noSwaps = false
        }
      }
      if (noSwaps) break
    }
    return arr
  }
  
  
  // var data = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
  
  // console.log(bubbleSort(data))