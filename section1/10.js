//문자 찾기
function solution(s, t){
    let answer=0;
    for(let x of s){
        if(x===t) answer++;
    }
    return answer;
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));

// function solution(s, t){
//     let answer=s.split(t).length;
//     return answer-1;
// }

// let str="COMPUTERPROGRAMMING";
// console.log(solution(str, 'R'));