/*
Desafio: Tabuleiro
Criar um pequeno tabuleiro onde é
possivel a movimentação do X;

Inicio do tabuleiro:
|X|| || |
| || || |
| || || |
*/

let table = {
	// Posição inicial do X no tabuleiro
	table: '|X|| || | \n| || || | \n| || || |', 

	// Altura e largura do tabuleiro
	axisX: 3,
	axisY: 3,
	
	// Posição inicial do X
	positionX: 3,
	positionY: 1,

	// Método para desenhar o tabuleiro dinâmicamente
	showTable(){
		this.table = '';
		for (let x = this.axisX; x >= 1; x--){
			for (let y = 1; y <= this.axisY; y++){
				x == this.positionX && y == this.positionY? this.table += '|X|' : this.table += '| |';
				if (y == this.axisY)
					this.table += ' \n';
			}
		}
		console.log(this.table);
	},

	/*
	Em cada um dos métodos de movimento,
	existe um operador ternário que verifica os limites do tabuleiro.
	Caso o movimento seja inválido, é indicado no console.
	*/
	up(){
		this.positionX < this.axisX ? this.positionX++ : console.log('Movimento inválido');
		this.showTable();
	},

	down(){
		this.positionX > 1 ? this.positionX-- : console.log('Movimento inválido');
		this.showTable();
	},

	left(){
		this.positionY > 1 ? this.positionY-- : console.log('Movimento inválido');
		this.showTable();
	},

	right(){
		this.positionY < this.eixoY ? this.positionY++ : console.log('Movimento inválido');
		this.showTable();
	}
}