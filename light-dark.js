var dark_mode = false;

function light_dark_toggle() {
	dark_mode = ~dark_mode;
	document.body.classList.toggle('dark');
	document.body.classList.toggle('light');
}
