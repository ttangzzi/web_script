const displayDate = document.querySelector('#today');
const displayTime = document.querySelector("#clock");
const result = document.querySelector("#result");

const travelDay = new Date("2025-08-02");  // 여행 날짜
const today = new Date(); // 오늘

let passedTime = travelDay.getTime() - today.getTime(); // 여행 날짜 - 오늘 = 남은 날짜
let passedDay = Math.round(passedTime / (1000 * 60 * 60 * 24)); // 밀리초를 일(date) 수로 계산
result.innerText = passedDay;

// 현재 뉴욕 날짜 
const now = new Date();
now.setHours(now.getHours() - 13);
const year = now.getFullYear();    // 연도
const month = now.getMonth() + 1;   // 월(0~11) + 1
const date = now.getDate();  // 날짜
const day1 = now.getDay();  // 요일 (0~6)
let day2 = " ";   // 요일명을 저장할 변수
// 반환된 요일(숫자)을 체크해서 요일명 지정
switch(day1) {
  case 0 : 
    day2 = "일요일"; break;
  case 1 :  
    day2 = "월요일"; break;
  case 2 : 
    day2 = "화요일"; break;
  case 3 : 
    day2 = "수요일"; break;
  case 4 : 
    day2 = "목요일"; break;
  case 5 : 
    day2 = "금요일"; break;
  case 6 : 
    day2 = "토요일"; break;
}

displayDate.innerHTML = `${year}년 ${month}월 ${date}일 
                        <span style="font-weight:bold">${day2}</span>`;
// 현재 뉴욕 시간 구하기
let clock = () => {
  let current = new Date();
  current.setHours(current.getHours() - 13);
  let hrs = current.getHours();
  let mins = current.getMinutes();
  let secs = current.getSeconds();
  let period = "AM";
  if (hrs === 0) {
    hrs = 12;
  } else if (hrs > 12) {
    hrs = hrs - 12;
    period = "PM";
  }
  
  hrs = (hrs < 10) ? "0" + hrs : hrs;
  mins = (mins < 10) ? "0" + mins : mins;
  secs = (secs < 10) ? "0" + secs : secs;

  // console.log(`${period} ${hrs} : ${mins} : ${secs}`);

  displayTime.innerText = `${period}  ${hrs} : ${mins} : ${secs} `;
}

setInterval(clock, 1000);