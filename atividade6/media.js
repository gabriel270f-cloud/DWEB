let nome = prompt("Digitr seu nome");

let n1 = prompt("digite sua primeira nota");

let n2 = prompt("digite sua segunda nota");

let n3 = prompt("digite sua terceira nota");

let n4 = prompt("digite sua quarta nota");
let soma = (parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4;
alert(nome+":sua media è ="+soma.toFixed(2));