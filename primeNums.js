// Given a number, n, return the number of prime numbers from 1 - n

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

function primeNums(n) {
    result = []
    if (n == 1) return 1
    for (i = 2; i <= n; i++) {
        if (isPrime(i)) {
            result.push(i)
            console.log({ result })
        }
    }
    return result.length
}
  
//   console.log(primeNums(1000))
