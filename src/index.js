module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  }
  for (let key in matrix) {
    if(key % 2 !== 0) {
      matrix[key].reverse()
    }
  } 
  return (matrix.flat(Infinity));
}
