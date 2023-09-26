let firstNumber = prompt("Digite o 1 numero: ")
let secondNumber = prompt('Digite o 2 numero: ')


// A função Number() converte uma string para um número
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert("Soma: " + sum)
alert("Subtração: " + sub)
alert("Multipliacação: " + multi)
alert("Divisão: " + div)
alert("Resto da divisão: " + restDiv)