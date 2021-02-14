/** @format */

function sumarLento(numero) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve(numero + 1);
			// reject('Sumar lento fallo');
		}, 700);
	});
}

let sumarRapido = (numero) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(numero + 1);
			// reject('Error en sumar rapido');
		}, 300);
	});
};

//Retorna el que termina primero
Promise.race([sumarLento(5), sumarRapido(10)])
	.then((resp) => {
		console.log(resp);
	})
	.catch(console.log);
