function solution(a, b, c) {
  let answer;
  a < b ? (answer = a) : (answer = b);
  return c < answer ? (answer = c) : c;
}

console.log(solution(2, 5, 1));
