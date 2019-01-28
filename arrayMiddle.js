const middle = (num, mid = (num.length / 2)) => {
  return num.length % 2 ? num[Math.floor(mid)] : (num[mid - 1] + num[mid]) / 2
}

// if the array has an even number of elements, return the average of the middle two elements

let arr1 = [200, 5, 100];
middle(arr1); // 5

let arr2 = [10, 20, 30, 40];
middle(arr2); // 25