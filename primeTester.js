const primeTester = (n, s = Math.sqrt(n)) => {
  for (let i = 2; i <= s; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n >= 2;
}