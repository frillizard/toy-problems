function nestedWordCount (wordList, wordCount = {}, result = []) {
  wordList = wordList.filter(word => word.length > 1);
  for (x of wordList) {
    for (y of wordList) {
      if (x.includes(y) && x !== y) {
        wordCount[x] = wordCount[x] + 1 || 1;
      }
    }
  }
  for (entry in wordCount) {
    result.push([entry, wordCount[entry]])
  }
  result = result.sort((a, b) => b[1] - a[1]);
  return result[0][0];
}