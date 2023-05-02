// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// - `array`의 길이는 홀수입니다.
// - 0 < `array`의 길이 < 100
// - 1,000 < `array`의 원소 < 1,000

// 나의 풀이
function solution(array) { // -10 20 22 3 -4
  let answer = array.sort(function(a,b) { return a-b; }); // -10 -4 3 20 22
  if(array.length == 1) {
      return answer[0];
  } else {
      return answer[(array.length-1)/2]
  }
}