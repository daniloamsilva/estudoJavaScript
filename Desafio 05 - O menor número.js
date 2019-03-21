/*
Desafio: Qual menor número?
*/

let myNumbers = [17, 5, 8, 1, 9];

function isSmaller(array){
	smaller = array[0];
	for(let number of array){
		if (number < smaller)
			smaller = number;
	}
	return smaller;
}
