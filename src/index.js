module.exports = function count(s, pairs) {
  const masks = s.split().map(str => +str);
  const len = masks.length;
  let answer = 0;
  if (pairs[0][1] >= 2 || pairs.length > 2) return 0;

  const nums = pairs.map(element => element[0] ** element[1]);

  const N = nums.reduce((acc, curr) => acc * curr, 1);

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };


  for (let k = 0; k <= N; k += 1) {
    for (let j = 0; j < len; j += 1) {
      let temp = gcd(k + j, N);
      if ((temp === 1 && masks[j] === 1) || (temp > 1 && masks[j] === 0)) {
        answer += 1;
      }
    }
  }

  const result = answer % 1000000007;
  return result;
};
