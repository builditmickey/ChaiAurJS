const clock = document.querySelector("#clock");

function displayTime() {
	const now = new Date();

	const localTime = now.toLocaleTimeString();

	clock.innerHTML = localTime;
}

setInterval(displayTime, 1000);
