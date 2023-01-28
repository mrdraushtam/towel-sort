module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return []
  }
  for (let key = 0; key < matrix.length; key++) {
    if(key % 2 !== 0) {
      matrix[key].reverse()
    }
  } 
  return (matrix.flat(Infinity));
}
