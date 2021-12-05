/*
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수 작성
https://programmers.co.kr/learn/courses/30/lessons/12919
*/

function solution(seoul) {
    return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

solution(['Jane', 'Kim']); // 김서방은 1에 있다
solution(['Jane', 'john', 'Kim']); // 김서방은 2에 있다
