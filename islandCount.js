const countIslands = (mapStr) => {
  let count = 0
  let map = mapStr.split('\n').map(e => e.split(''));
  for (let x = 0; x < map.length; x++) {
    for (let y = 0; y < map[0].length; y++) {
      if (map[x][y] === '0') {
        map = conquer(x, y, map);
        count++
      }
    }
  }
  return count;
}

const conquer = (x, y, map) => {
  //marks current spot
  map[x][y] = 'X';
  //check left
  if (map[x-1] && map[x-1][y] === '0'){map=conquer(x-1,y,map)}
  //check right
  if (map[x+1] && map[x+1][y] === '0'){map=conquer(x+1,y,map)}
  //check up
  if (map[x][y-1] === '0'){map=conquer(x,y-1,map)}
  //check down
  if (map[x][y+1] === '0'){map=conquer(x,y+1,map)}
  return map;
}