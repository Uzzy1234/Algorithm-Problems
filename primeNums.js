// Given a number, n, return the number of prime numbers from 1 - n

function primeNums(n) {
    result = []
    if (n == 1) return 1
    for (i = 2; i <= n; i++) {
      if (i % 2 !== 0) {
        result.push(i)
      }
    }
    return result
  }
  
  //console.log(primeNums(1000))