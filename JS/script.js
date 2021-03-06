let span = document.createElement('span');
span.innerHTML = "Example";
example.append(span);

let close = document.getElementsByClassName("close")[0];

close.onclick = () => {
	modal_color.style.display = "none";
	example.style.justifyContent = "flex-end";
	example.style.alignItems = "flex-end";
}

window.onclick = (event) => {
	if (event.target == modal_color) {
		modal_color.style.display = "none";
		example.style.justifyContent = "flex-end";
		example.style.alignItems = "flex-end";
	}
}

rgbToHex = (rgb) => {
	var rgb = rgb.match(/^rgba?\([\s]*(\d+)[\s]*,[\s]*(\d+)[\s]*,[\s]*(\d+)[\s]*,?[\s]*(\d+.\d+[\s]*)?\)/i);
	return (rgb) ? "#" +
		("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
		("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
};

color = () => {
	switch (event.toElement) {
		case span:
			modal_color.style.display = "block";
			modal_color.getElementsByTagName("p")[0].innerHTML = 'Цвет фона: ' + rgbToHex(window.getComputedStyle(example, null).getPropertyValue("background-color"))
			break;
		case example:
			example.style.background = "#0000FF";
			break;
	}
}

example.addEventListener('click', {
	handleEvent(event) {
		color();
	}
});
 
