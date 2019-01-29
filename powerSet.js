powerSet = (string, arr, set1 = new Set()) => {
  arr = [...new Set(string)].sort();
  for (let i = 1; i < (1<<arr.length); i++) {
    let str = '';
    for (let j = 0; j < (1<<arr.length); j++) {
      if (i & (1<<j)) {
        str += arr[j];
      }
    }
    set1.add(str);
  };
  return ['', ...set1].sort();
}