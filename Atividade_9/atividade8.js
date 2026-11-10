function funcao1() {
    let n1 = parseFloat(prompt("Digite o 1º número:"));
    let n2 = parseFloat(prompt("Digite o 2º número:"));
    let n3 = parseFloat(prompt("Digite o 3º número:"));

    let maior = Math.max(n1, n2, n3);
    
    alert("O maior número entre os três é: " + maior);
}

function funcao2() {
    let n1 = parseFloat(prompt("Digite o 1º número:"));
    let n2 = parseFloat(prompt("Digite o 2º número:"));
    let n3 = parseFloat(prompt("Digite o 3º número:"));

    let numeros = [n1, n2, n3];
    numeros.sort((a, b) => a - b);

    alert("Números em ordem crescente: " + numeros.join(", "));
}

function funcao3() {
    let texto = prompt("Digite uma palavra ou frase:");
    if (!texto) return;

    let textoLimpo = texto.toLowerCase().replace(/\s/g, ""); 
    let textoInvertido = textoLimpo.split("").reverse().join("");

    if (textoLimpo === textoInvertido) {
        alert(`"${texto}" É um palíndromo!`);
    } else {
        alert(`"${texto}" NÃO é um palíndromo.`);
    }
}

function funcao4() {
    let palavra1 = prompt("Digite a primeira palavra (ex: programação):");
    let palavra2 = prompt("Digite a segunda palavra (ex: programa):");

    if (!palavra1 || !palavra2 || palavra1.trim() === "" || palavra2.trim() === "") {
        alert("erro");
        return;
    }

    if (palavra1.toLowerCase().includes(palavra2.toLowerCase())) {
        alert("é um subconjunto");
    } else {
        alert("não é um subconjunto");
    }
}

function funcao5() {
    let dataString = prompt("Digite uma data (formato AAAA-MM-DD, ex: 2024-12-25):");
    if (!dataString) return;

    let data = new Date(dataString + "T00:00:00");

    if (isNaN(data.getTime())) {
        alert("Data inválida! Use o formato AAAA-MM-DD.");
        return;
    }

    const diasDaSemana = [
        "Domingo", "Segunda-feira", "Terça-feira", 
        "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
    ];
    
    let diaDaSemana = diasDaSemana[data.getDay()];
    
    alert("O dia da semana é: " + diaDaSemana);
}