/*
Desafio: Qual o dia da semana?
Criar uma função que vai receber ano, mês e dia.
Deverá retornar o dia da semana correspondente.
Não deve utilizar if ou switch.
*/

function weekDay(stringDate){
	// Cria a data a partir da string passada
	let date = new Date(stringDate);
	// Em função do fuso horário brasileiro, devemos acrescentar 1 na data
	date = date.setDate(date.getDate() + 1);
	// A data retornada é passada em milisegundos, então crio a data novamente
	date = new Date(date);

	// Array de referência para os dias das semana
	let dayWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

	// Retorno com o índice do dia da semana
	return dayWeek[date.getDay()];
}

/*
Exemplo
Input: '2019-03-18'
Output: 'monday'
*/
