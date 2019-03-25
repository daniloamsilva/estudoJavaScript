/*
Projeto Final: Jogo da Velha
*/

// currentPlayer controla a vez de jogar dos players
// currentTurn controla o número de jogadas e é importante para identificar um empate
let currentPlayer = 'X';
	currentTurn = 1;

// Variáveis para identificar os elementos da tela
// statusText passa mensagens na tela
// buttonRestart reinicia o jogo
let statusText = document.getElementById('statusText'),
	buttonRestart = document.getElementById('buttonRestart');

// Array para alocar todos as referências do tabuleiro desenhado na tela
let boardReferences = [[],[],[]];

// Laço para atribuir um listener para cada quadrado do tabuleiro
for (let x = 0; x < 3; x++){
	for (let y = 0; y < 3; y++){
		boardReferences[x][y] = document.getElementById(`[${x},${y}]`);
		boardReferences[x][y].addEventListener('click', function(){
			// Desenha o X ou O
			if(draw(currentPlayer, x, y)){
				// Verifica um ganhador
				if (checkWin(x, y))
					// Chama o método para avisar a vitória
					win(currentPlayer);
				else
					// Passa a vez para o jogador
					turnPlayer();
			}
		});
	}
}

// Listener do botão Restart
buttonRestart.addEventListener('click', function(){
	// Laço para zerar todo o tabuleiro
	for (let x = 0; x < 3; x++){
		for (let y = 0; y < 3; y++){
			boardReferences[x][y].innerText = '⠀';
		}
	}
	// Reinicia todas as variáveis de controle do jogo
	currentPlayer = 'X';
	currentTurn = 1;
	statusText.innerText = 'Current Player: X';
})

// Função responsavel de desenhar no tabuleiro
function draw (currentPlayer, positionX, positionY){
	let element = boardReferences[positionX][positionY];
	// Se o quadrado estiver vazio
	if (element.textContent == '⠀') {
		// Desenha o simbolo do jogador no tabuleiro
		element.innerText = currentPlayer;
		return true;
	}else{
		return false;
	}
}

// Função para passar a vez para o outro jogador
function turnPlayer(){
	// Primeiro verifica qual o jogador atual
	currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
	// Muda o texto exibido na tela
	statusText.innerText = 'Current Player: ' + currentPlayer;
	// Verifica o número do turno
	if (currentTurn < 9) {
		// Acrescenta no turno
		currentTurn += 1;
	}else{
		// Se não, declara um empate
		statusText.innerText = 'Winner: Nobory';
	}
}

// Função para verificar se existe um vencedor

/*
	O primero switch pega o valor de x que se refere as linhas do tabuleiro,
	e o segundo switch pega o valor de y que se refere as colunas.
	A partir daí, os IFs verificam as retas possíveis (horizontal, vertical e/ou diagonal).
	Esses testes são feitos verificando o textContent dos quadrados da reta em questão.
	Retorno: true para vencedor e false para o jogo continuar.
*/
function checkWin(x, y){
	let textContent = boardReferences[x][y].textContent;

	switch (x){
		case 0:
			switch (y){
				case 0:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][1].textContent && textContent == boardReferences[0][2].textContent)
						return true;
					else if (textContent == boardReferences[1][0].textContent && textContent == boardReferences[2][0].textContent)
						return true;
					else if (textContent == boardReferences[1][1].textContent && textContent == boardReferences[2][2].textContent)
						return true;
					else
						return false;
					break;
				case 1:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][0].textContent && textContent == boardReferences[0][2].textContent)
						return true;
					else if (textContent == boardReferences[1][1].textContent && textContent == boardReferences[2][1].textContent)
						return true;
					else
						return false;
					break;
				case 2:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][0].textContent && textContent == boardReferences[0][1].textContent)
						return true;
					else if (textContent == boardReferences[1][2].textContent && textContent == boardReferences[2][2].textContent)
						return true;
					else if (textContent == boardReferences[1][1].textContent && textContent == boardReferences[2][0].textContent)
						return true;
					else
						return false;
					break;
			}; break;
		case 1:
			switch (y){
				case 0:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][0].textContent && textContent == boardReferences[2][0].textContent)
						return true;
					else if (textContent == boardReferences[1][1].textContent && textContent == boardReferences[1][2].textContent)
						return true;
					else 
						return false;
					break;
				case 1:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][1].textContent && textContent == boardReferences[2][1].textContent)
						return true;
					else if (textContent == boardReferences[1][0].textContent && textContent == boardReferences[1][2].textContent)
						return true;
					else if (textContent == boardReferences[0][0].textContent && textContent == boardReferences[2][2].textContent)
						return true;
					else if (textContent == boardReferences[0][2].textContent && textContent == boardReferences[2][0].textContent)
						return true;
					else
						return false;
					break;
				case 2:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][2].textContent && textContent == boardReferences[2][2].textContent)
						return true;
					else if (textContent == boardReferences[1][0].textContent && textContent == boardReferences[1][1].textContent)
						return true;
					else 
						return false;
					break;
			}; break;
		case 2:
			switch (y){
				case 0:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][0].textContent && textContent == boardReferences[1][0].textContent)
						return true;
					else if (textContent == boardReferences[2][1].textContent && textContent == boardReferences[2][2].textContent)
						return true;
					else if (textContent == boardReferences[0][2].textContent && textContent == boardReferences[1][1].textContent)
						return true;
					else
						return false;
					break;
				case 1:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][1].textContent && textContent == boardReferences[1][1].textContent)
						return true;
					else if (textContent == boardReferences[2][0].textContent && textContent == boardReferences[2][2].textContent)
						return true;
					else 
						return false;
					break;
				case 2:
					console.log(x + ',' + y);
					if (textContent == boardReferences[0][2].textContent && textContent == boardReferences[1][2].textContent)
						return true;
					else if (textContent == boardReferences[2][0].textContent && textContent == boardReferences[2][1].textContent)
						return true;
					else if (textContent == boardReferences[0][0].textContent && textContent == boardReferences[1][1].textContent)
						return true;
					else
						return false;
					break;
			}; break;
		default:
			return false; break;
	}
}

// Função para indicar o vencedor
function win(currentPlayer){
	statusText.innerText = 'Winner: ' + currentPlayer;
}