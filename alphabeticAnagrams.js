const anagramPosition = (str, letters = [...str].sort(), total = 1) => {
  for (c of str) {;
    let i = letters.indexOf(c);
    let length = letters.length;
    if (i > 0) {
      total += factorial(length) / repeat(letters) * i / length;
    }
    letters.splice(i, 1);
  }
  return total;
}

const repeat = (arr, result = 1, letters = {}) => {
  for (c of arr) {
    letters[c] = letters[c] + 1 || 1;
  }
  for (c in letters) {
    result *= factorial(letters[c]);
  }
  return result;
} 

const factorial = n => {
  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }
  return n;
}