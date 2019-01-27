const rotateMatrix = (matrix, direction, repeat = 1) => {
  let newMatrix = [];
  repeat = repeat % 4;
  if (repeat === 0) {
    repeat = 4;
  }
  if (direction === -1) {
    for (let i = 0; i < matrix[0].length; i++) {
      let newRow = [];
      for (rows of matrix) {
        newRow.push(rows[i]);
      }
      newMatrix.unshift(newRow);
    }
  } else {
    for (let i = 0; i < matrix[0].length; i++) {
      let newRow = [];
      for (rows of matrix) {
        newRow.unshift(rows[i])
      }
      newMatrix.push(newRow);
    }
  }
  return repeat > 1 ? rotateMatrix(newMatrix, direction, repeat - 1) : newMatrix;
}

let test = [
  ['a','b','c','d','e'],
  ['f','g','h','i','j'],
  ['k','l','m','n','o'],
  ['p','q','r','s','t'],
  ['u','v','w','x','y']];

console.log('original', test);
console.log('clockwise', rotateMatrix(test));
console.log('counterclockwise', rotateMatrix(test, -1));
console.log('multi-rotate', rotateMatrix(test, 0, Number.MAX_SAFE_INTEGER));
console.log('rectangle', test.slice(0,4));
console.log('rectangle rotate', rotateMatrix(test.slice(0,4)));