/*
Desafio: Lista em HTML
Criar uma função que dado um array,
criamos uma lista dos elementos contidos nele.
*/

function createList (array){
	// Cria a tag <ul> no corpo do documento em HTML
	document.querySelector('body').appendChild(document.createElement('ul'));

	// Usando forEach para utilizar cada elemento do array
	array.forEach(element => {
		// Criando um elemento <li>
		let tagLi = document.createElement('li');
		// Passando o texto para o elemento
		tagLi.innerText = 'Item: ' + element.toString();
		// Atribuindo elemento <li> em <ul>
		document.querySelector('ul').appendChild(tagLi);
	})
}

/*
Exemplo
Input: ['Palavras', true, 3]
Output: 
	<ul>
		<li> Item: Palavras </li>
		<li> Item: true </li>
		<li> Item: 3 </li>
	</ul>
*/