/*
Desenhar um triângulo no console.
*/

for (var i = 1; i <= 10; i++) {
	let asteriscos = '';
	for (var j = 0; j < i; j++) {
		asteriscos += '*';
	}
	console.log(asteriscos);
}

for (var i = 9; i >= 1; i--) {
	let asteriscos = '';
	for (var j = 0; j < i; j++) {
		asteriscos += '*';
	}
	console.log(asteriscos);
}

/* RESULTADO:

*
**
***
****
*****
******
*******
********
*********
**********
*********
********
*******
******
*****
****
***
**
*

*/