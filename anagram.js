// An anagram solution in my own way LOL!!!
// Had fun with this one...LOL!!!

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false
    }
  
    let freqCounter1 = {}
    let freqCounter2 = {}
  
    for (char of str1) {
      (freqCounter1[char] > 0) ? freqCounter1[char]++ : freqCounter1[char] = 1
    }
    for (char of str2) {
      (freqCounter2[char] > 0) ? freqCounter2[char]++ : freqCounter2[char] = 1
    }
    for (key in freqCounter1) {
      if (!(key in freqCounter2)) {
        return false
      }
      if (freqCounter1[key] !== freqCounter2[key]) {
        return false
      }
    }
    return true
  }
  
  // console.log(anagram('hellol1', 'lolhe1e'))

