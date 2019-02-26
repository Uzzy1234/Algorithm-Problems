function numCheck(array1, total_num) {

  for (i=0; i<array1.length; i++) {
    for(j=i+1; j<array1.length; j++){
      let new_value = array1[j]
      let sum = array1[i] + new_value
      if (sum == total_num)
        return true
    }
  }
  return false
}

console.log(numCheck([1, 2, 5, 3], 3))
