const largestProductOfThree = (arr, multiply=(a,b)=>a*b) => {
  arr.sort((a,b)=>b-a)
  return Math.max(
    arr.slice(0,3).reduce(multiply),
    arr.slice(-2).reduce(multiply)*arr[0]
)}