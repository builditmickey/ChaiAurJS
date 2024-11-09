const insert = document.querySelector("#insert");

window.addEventListener("keydown", (e) => {
	insert.innerHTML = `
    <div>${e.key}</div>`;
});
