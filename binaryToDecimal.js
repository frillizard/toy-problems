// Note: Do NOT use partInt(n, 2)

const binaryToDecimal = (n) => {
  let decimal = 0;
  let binary = [...n].reverse();
  for (let i = 0; i < n.length; i++) {
    if (binary[i] > 0) {
      decimal += Math.pow(2, i);
    }
  }
  return decimal;
}
