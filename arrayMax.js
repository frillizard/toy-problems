// Note: Don't use Math.max()
const max = num => num.sort((a,b) => b - a)[0];

let arr1 = [20, 30, 10];
max(arr1); // 30