/*
Desafio: Elevador
Criar uma objeto chamado elevador
com métodos para descer e subir.
O prédio tem somente 3 andares.
*/

let elevator = {
	floor: 0,
	up(){
		if (this.floor < 3) this.floor ++;
		console.log(this.floor);
	},
	down(){
		if (this.floor > 0) this.floor--;
		console.log(this.floor);
	}
}