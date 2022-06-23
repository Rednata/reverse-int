module.exports = function reverse (n) {
  let newNumber = '';
  n = Math.abs(n);
  while (n > 0) {
    newNumber = newNumber + (n % 10);
    n = (n - n%10)/10;
  }
  return newNumber;
}