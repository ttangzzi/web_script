const clock = document.querySelector("#clock");

function getClock () {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0"); // date.getHours() 는 number 이므로 string으로 바꿔야 padStart 사용가능
	const minutes = String(date.getMinutes()).padStart(2,"0"); // 같은 이유
	const seconds = String(date.getSeconds()).padStart(2,"0"); // 같은 이유
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);