const isSubset = (arr, sub) => {
  return sub.length ? arr.slice(arr.indexOf(sub[0]), sub.length + 1).join('') === sub.join('') : true;
}

let arr1 = [1,2,3,4];
let sub1 = [2,3,4];

isSubset(arr1, sub1); // true

let arr2 = [2,2,2,3,4];
let sub2 = [2,4,3];

isSubset(arr2, sub2); // false

let arr3 = [2,3,3,'a'];
let sub3 = [3,3,3,'a'];

isSubset(arr3, sub3); // false