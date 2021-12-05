/*
https://programmers.co.kr/learn/courses/30/lessons/76501
정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
*/

function solution(absolutes, signs) {
    return absolutes.reduce((accumulator, currentValue, currentIndex) => {
        return accumulator + (signs[currentIndex] ? currentValue : -currentValue);
    }, 0)
}

solution([4, 7, 12], [true, false, true]); // 9
solution([1, 2, 3], [false, false, true]); //0
