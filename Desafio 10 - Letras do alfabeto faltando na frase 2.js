/*
Desafio: Letras do alfabéto faltando na frase 2.
Crie uma função, que passado uma string, 
ele retorna as letras do alfabeto que
não foram utilizadas.
Este desafio está melhorando o código escrito
no desafio 8.
*/

function missingLetters(string){
	// Todas as letras transformadas em minúsculas
	// e tranformadas em um array com cada letra em um elemento do mesmo
	string = string.toLowerCase().split('');

	// Array com todas as letras do alfabeto
	let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
			'n','o','p','q','r','s','t','u','v','w','x','y','z'];

	// Array para guardar as letras não utilzadas
	let noUsedLetters = [];

	// Utilizei o método forEach para testa cada letra do alfabeto.
	// Utilizei um arrow function com um operador ternário.
	// Caso verdadeiro, um console log é chamado, se não, a letra é armazenada no array noUsedLetters.
	alphabet.forEach(letter => string.includes(letter)? 
		console.log('Contem a letra:'+ letter): noUsedLetters.push(letter));

	return noUsedLetters;
}

/*
Exemplo
Input: 'Meu nome é Danilo!'
Output: ["b", "c", "f", "g", "h", "j", "k", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
*/
