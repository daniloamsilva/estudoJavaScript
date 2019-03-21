/*
Desafio: Mensagens Aleatórias
*/

function randomMessage(){
	let messages = [
		'Olá!',
		'Tudo bem?',
		'Bom dia!',
		'Boa tarde!',
		'Boa noite!',
		'Adeus!',
		'Qual o seu nome?',
		'Onde eu estou?',
		'Me deixa dormir!',
		'Hello world!'
	];

	let randomIndex = Math.trunc(Math.random() * messages.length);

	return messages[randomIndex];
}
