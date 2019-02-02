function isBalanced (str, stack = []) {
  for (c of str) {
    if (c === '(' || c === '{' || c === '[') {
      stack.unshift(c);
    } else if (c === ')' && stack[0] === '(') {
      stack.shift();
    } else if (c === '}' && stack[0] === '{') {
      stack.shift();
    } else if (c === ']' && stack[0] === '[') {
      stack.shift();
    } else if (c === ')' || c === '}' || c === ']') {
      return false;
    }
  }
  return stack.length < 1;
}