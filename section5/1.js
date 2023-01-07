//두 배열 합치기
function solution(arr1, arr2) {
  let answer = [...arr1, ...arr2];
  result = answer.sort().filter((idx, val) => {
    result[idx + 1] === result[idx];
  });
  return result;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
