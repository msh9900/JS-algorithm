//공통 원소 구하기
function solution(arr1, arr2){
    let answer=[];
    arr1.sort((a, b)=>a-b); //sort() 괄호에 빈칸이면 두자리 숫자가 됬을때는 문자열을 기준으로 정렬되서 문제가 생긴다 그렇기때문에 조건을 넣어줘야함.
    arr2.sort((a, b)=>a-b);
    let p1=p2=0;
    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1]===arr2[p2]){
            answer.push(arr1[p1++]);
            p2++;
        }
        else if(arr1[p1]<arr2[p2]) p1++;
        else p2++;
    }              
    return answer;
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));