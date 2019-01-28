const zeroSum = (numbers, set = new Set()) => {
  for (num of numbers) {
    if (set.has((0 - num))) {
      return true;
    }
    set.add(num);
  }
  return false;
}

let arr1 = [1, 3, 2, -3];
zeroSum(arr1); // true

let arr2 = [5, 7, 2, 9];
zeroSum(arr2); // false