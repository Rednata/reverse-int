module.exports = function reverse (n) {

  n = String(Math.abs(n));
  let newNumber = '';
  for (let i = n.length-1; i >= 0; i--) {
    newNumber = newNumber + n[i];
  }
  return newNumber;
}