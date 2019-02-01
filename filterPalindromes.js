const filterPalindromes = words => {
  let palindromes = [];
  for (word of words) {
    let w = [...word].filter(c => c !== ' ').join('').toLowerCase();
    if (w === [...w].reverse().join('')) {
      palindromes.push(word);
    }
  }
  return palindromes;
}