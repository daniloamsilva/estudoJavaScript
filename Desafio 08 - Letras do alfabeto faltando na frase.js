/*
Desafio: Letras do alfabéto faltando na frase.
Crie uma função, que passado uma string, 
ele retorna as letras do alfabeto que
não foram utilizadas.
*/

function missingLetters(string){
	// Todas as letras transformadas em minúsculas
	string = string.toLowerCase();

	// Array com todas as letras em expressões regulares
	let alphabet = [/a/,/b/,/c/,/d/,/e/,/f/,/g/,/h/,/i/,/j/,
			/k/,/l/,/m/,/n/,/o/,/p/,/q/,/r/,/s/,/t/,
			/u/,/v/,/w/,/x/,/y/,/z/];

	// Array para guardar as expressões que não retornaram valor
	let noUsedRegex = [];
	// Array para guardar as strings tradadas com o método split()
	let noUsedLetters = [];

	// Laço para testar cada expressão regular em busca das letras
	for (let letter of alphabet){
		if (string.match(letter) == null)
			// A expressão é transformada em string
			noUsedRegex.push(letter.toString());
	}

	// Laço para tratar as strings guardadas, retirando as "/"
	for (let regex of noUsedRegex){
		noUsedLetters.push(regex.split('/')[1]);
	}

	return noUsedLetters;
}

/*
Exemplo
Input: 'Meu nome é Danilo!'
Output: ["b", "c", "f", "g", "h", "j", "k", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
*/
