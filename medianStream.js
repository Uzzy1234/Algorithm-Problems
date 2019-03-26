function medianStream(arr) {
  i = 0
  var secondArr = []
  var finalArr = []
  var n = arr[0]
  var midPoint
  finalArr.push(n)
  while (i < arr.length-1) {
    secondArr = arr.slice(0, n).sort()
    midPointIdx = Math.floor(secondArr.length / 2)
    if (secondArr.length % 2 == 0) {
      midPointIdx1 = midPointIdx
      midPointIdx2 = midPointIdx - 1
      midPoint = (secondArr[midPointIdx1] + secondArr[midPointIdx2]) / 2
    } else {
      midPoint = secondArr[midPointIdx]
    }
    finalArr.push(midPoint)
    n++
    i++
  }
  return finalArr
}

// console.log(medianStream([2, 1, 5, 7, 2, 0, 5, 6, 12, 45, 2, 9, 0]))