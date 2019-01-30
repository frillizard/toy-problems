const translateRomanNumeral = (roman, total = 0) => {
  for (let i = 0; i < roman.length; i++) {
    dv[roman[i]] < dv[roman[i+1]] ?
    total -= dv[roman[i]] :
    total += dv[roman[i]]
  }
  return !isNaN(total) ? total : 'null';
}

const dv = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};