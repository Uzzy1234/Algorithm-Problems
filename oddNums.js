//Given an array, return an array containing the odd numbers in the inputed array

function oddNums(arr) {
  var result = []
  for (let num of arr) {
    if (num % 2 !== 0) {
      return result.push(num)
    }
  }
}

// const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]
// console.log(oddNums(list))