/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
  let chunkArr = []; // size 별로 나눈 값들을 저장하기 위한 빈 배열 선언
  for(let i = 0; i < arr.length; i++) { // arr의 길이 미만동안 반복
      if((arr.slice(size*i,size*(i+1)).length !== 0)) { // size*i 부터 size(i+1) 직전까지의 길이가 0이 아닐때
          chunkArr[i] = arr.slice(size*i,size*(i+1)); // chunk[i]에 size*1부터 size(i+1) 직전까지의 값을 넣는다
      }
      // if 문에 만족되지 않을 땐 chunkArr[i]에 아무것도 넣지 않게된다
  }
  return chunkArr; // 반복문 종료 후 chunkArr 반환
};