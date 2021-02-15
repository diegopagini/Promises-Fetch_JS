/** @format */

let img = document.querySelector('img');

fetch('assets/superman.png')
	.then((resp) => {
		return resp.blob();
	})
	.then((imagen) => {
		let imgPath = URL.createObjectURL(imagen);
		img.src = imgPath;
	});
