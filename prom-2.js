/** @format */

//Problematica
function sumarUno(numero, callback) {
	var promesa = new Promise(function (resolve, reject) {
		console.log(numero);
		if (numero >= 7) {
			reject('El numero es muy alto');
		}
		setTimeout(function () {
			resolve(numero + 1);
		}, 1000);
	});

	return promesa;
}

sumarUno(5)
	.then(sumarUno)
	.then(sumarUno)
	.then(sumarUno)
	.catch((error) => {
		console.log('Error en promesa');
		console.log(error);
	});
