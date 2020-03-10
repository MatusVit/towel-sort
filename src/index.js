
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];
  return matrix.reduce((acc, elm, index) => {
    if (index%2) elm.reverse();
    return   acc.concat(elm);
  });
}
