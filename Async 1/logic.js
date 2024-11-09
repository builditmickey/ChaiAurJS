const randomColor = function () {
	const hex = "123456789ABCDEF";

	let color = "#";

	for (let i = 0; i < 6; i++) {
		color += hex[Math.floor(Math.random() * 16)];
	}

	return color;
};

let intervalID;

const startColorChange = function () {
	intervalID = setInterval(function () {
		const body = document.querySelector("body");
		body.style.backgroundColor = randomColor();
	}, 1000);
};

const stopColorChange = function () {
	clearInterval(intervalID);
};

document.querySelector("#start").addEventListener("click", startColorChange);

document.querySelector("#stop").addEventListener("click", stopColorChange);
