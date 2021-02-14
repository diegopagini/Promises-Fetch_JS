/** @format */

function sumarLento(numero) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(numero + 1);
			reject('Sumar lento fallo');
		}, 700);
	});
}

let sumarRapido = (numero) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(numero + 1);
		}, 300);
	});
};

// sumarLento(5).then(console.log);
// sumarRapido(10).then(console.log);

let cosas = [sumarLento(5), sumarRapido(10), true, 'Hola mundo'];

//Si una promesa fallta, todas fallan.
Promise.all([cosas])
	.then((respuestas) => {
		console.log(respuestas);
	})
	.catch(console.log);
