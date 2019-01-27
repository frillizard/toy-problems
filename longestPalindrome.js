const longestPalindrome = (string, palindromes = []) => {
  for (word of string.split(' ')) {
    if (word === [...word].reverse().join('')) {
      palindromes.push(word);
    }
  }
  for (palindrome of palindromes) {
    let start = string.indexOf(palindrome);
    let end = start + palindrome.length;
    if (string[start - 1] === string[end]) {
      palindromes.push(string.slice(start - 1, end + 1));
    }
  }
  return palindromes.sort((a, b) => b.length - a.length)[0];
}

let str1 = "aibohphobia";
let str2 = "My dad is a racecar athlete";
console.log(longestPalindrome(str1)); // aibohphobia
console.log(longestPalindrome(str2)); // a racecar a