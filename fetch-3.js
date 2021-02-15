/** @format */
// 'https://reqres.in/api/users'

let usuario = {
	nombre: 'Diego',
	edad: 29,
};

fetch('https://reqres.in/api/users', {
	method: 'POST', //Es posible elegir el metodo a utilizar dentro de fetch.
	body: JSON.stringify(usuario), //Se debe postear en strings
	headers: {
		'Content-Type': 'application/json',
	},
})
	.then((resp) => resp.json())
	.then(console.log)
	.catch((error) => {
		console.log('Error en la aplicacion'), console.log(error);
	});
