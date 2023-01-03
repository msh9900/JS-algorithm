//삼각형 판별하기
function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  a > b ? (max = a) : (max = b);
  c > max ? (max = c) : max;
  return tot - max <= max ? (answer = "NO") : (answer = "YES");
}

console.log(solution(13, 33, 17));
