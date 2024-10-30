const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	// height weight are extracted inside event listener because outside it, these will give empty values
	const height = parseInt(document.querySelector("#height").value);
	const weight = parseInt(document.querySelector("#weight").value);

	const result = document.querySelector("#result");

	if (height === "" || height < 0 || isNaN(height)) {
		result.innerHTML = "Please give valid input";
	} else if (weight === "" || weight < 0 || isNaN(weight)) {
		result.innerHTML = "Please give valid input";
	} else {
		const bmi = (weight / ((height * height) / 10000)).toFixed(2);

		result.innerHTML = `<span> ${bmi}</span>`;
	}
});