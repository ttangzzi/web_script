// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// - 10,000 ≤ `numbers`의 원소 ≤ 10,000
// - 1 ≤ `numbers`의 길이 ≤ 1,000

// 나의 풀이
function solution(numbers) {
  let answer = numbers;
  for(let i=0; i<numbers.length; i++) {
      answer[i] *= 2;
  }
  return answer;
}

