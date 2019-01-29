const allAnagrams = (str, results = []) => {
  (heap = (arr, n = arr.length) => {
    if (n === 1) {
    results.push(arr.join(''));
    } else {
      for (let i = 1; i <= n; i++) {
        heap(arr, n - 1, results);
        n % 2 ?
        [arr[0], arr[n-1]] = [arr[n-1], arr[0]]:
        [arr[i-1], arr[n-1]] = [arr[n-1], arr[i-1]];
      }
    }
  })([...str])
  return [... new Set(results)].sort();
}