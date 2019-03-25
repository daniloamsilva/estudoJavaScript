/*
Desafio: Atualizando listas
Criar uma campo de input. Digitando algo e dando enter,
esse teste entra em uma lista logo abaixo.
Clicando em cima do item, ele é apagado.
*/

// Número de itens da lista
let numberOfItems = 0;

// Listener que verifica quando o enter é pressionado
document.querySelector('#myInput').addEventListener('keyup', 
	function (){
	// Primeiro é verificado qual tecla foi pressionada
	if (event.keyCode == 13) {
		// Se o campo de texto estiver vazio, uma mensagem é exibida
		if (this.value == '') {
			alert('O campo está vazio!');
		}else{
			// Se não, primeiro é criado um item de lista
			let myLi = document.createElement('li');
			// É passado o texto digitado para esse item criado
			myLi.innerText = this.value;
			// O campo de texto fica vazio novamente
			this.value = '';
			// E por fim, o item é adicionado ao final da lista
			document.querySelector('ul').appendChild(myLi);

			// O número de itens da lista é atualizado
			numberOfItems = document.querySelector('ul').querySelectorAll('li').length;
			// O método listenerOfItems é chamado passando o número de itens como parâmetro
			listenersOfItems(numberOfItems);
		}
	}
});

// Esta função cria um listener para cada item da lista.
// Seu parâmetro é o número de itens na lista atualmente.
function listenersOfItems(lengthOfList){
	// Um laço é criado para percorrer os itens de lista
	for (let x = 0; x < lengthOfList; x++){
		let item = document.querySelector('ul').querySelectorAll('li')[x];
		item.addEventListener('click',
			function (){
				item.remove();
			})
	}
}