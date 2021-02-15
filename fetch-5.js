/** @format */

fetch('https://reqres.in/api/users/1000') // Los errores 400 no van al catch
	.then((resp) => {
		if (resp.ok) {
			return resp.json();
		} else {
			throw new Error('No eiste el usuario 1000');
		}
	})
	.then(console.log)
	.catch((error) => {
		console.log('Error en la peticion');
		console.log(error);
	});
