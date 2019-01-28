const rockPaperPermutation = f = (n, round = '', perms = []) => {
  if (n) {
    for (rps of 'rps') {
      perms.push(round + rps, ...f(n - 1, round + rps));
    }
  }
  return perms.filter(v => v.length >= n);
}