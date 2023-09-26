let student = prompt("Qual nome do aluno?")

let n1 = prompt("Qual a nota da 1 prova?");
let n2 = prompt("Qual a nota da 2 prova?");
let n3 = prompt("Qual a nota da 3 prova?");

let average = (Number(n1) + Number(n2) + Number(n3)) / 3;

let result = average > 6;

average = average.toFixed(2)

if (result) {
  alert("parabens," + student + "! Sua média foi de: " + average);
} 
else {
  alert(student + " estude para sua prova! Sua média foi de: " + average);
}
