let somaIdades = 0;
let maiorIdade = 0;
let menorIdade = 999;
let qtdPessimo = 0;
let qtdOtimoBom = 0;
let qtdMulheres = 0;
let qtdHomens = 0;
let qtdOutros = 0;

const TOTAL_PESSOAS = 45; 

for (let i = 1; i <= TOTAL_PESSOAS; i++) {
    alert(`--- Entrevistado ${i} de ${TOTAL_PESSOAS} ---`);
    
    let idade = parseInt(prompt("Digite a idade:"));
    let sexo = prompt("Digite o sexo (feminino, masculino ou outros):").toLowerCase();
    let opiniao = parseInt(prompt("Digite a opinião (1-Péssimo, 2-Regular, 3-Bom, 4-Ótimo):"));

    somaIdades += idade;

    if (i === 1) {
        maiorIdade = idade;
        menorIdade = idade;
    } else {
        if (idade > maiorIdade) maiorIdade = idade;
        if (idade < menorIdade) menorIdade = idade;
    }

    if (opiniao === 1) {
        qtdPessimo++;
    } else if (opiniao === 3 || opiniao === 4) {
        qtdOtimoBom++;
    }

    if (sexo === "feminino") {
        qtdMulheres++;
    } else if (sexo === "masculino") {
        qtdHomens++;
    } else {
        qtdOutros++;
    }
}

let mediaIdade = somaIdades / TOTAL_PESSOAS;
let porcentagemOtimoBom = (qtdOtimoBom / TOTAL_PESSOAS) * 100;

console.log("===== RESULTADO DA PESQUISA =====");
console.log(`a) Média da idade: ${mediaIdade.toFixed(2)} anos`);
console.log(`b) Idade da pessoa mais velha: ${maiorIdade} anos`);
console.log(`c) Idade da pessoa mais nova: ${menorIdade} anos`);
console.log(`d) Quantidade de pessoas que responderam péssimo: ${qtdPessimo}`);
console.log(`e) Porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOtimoBom.toFixed(2)}%`);
console.log(`f) Mulheres: ${qtdMulheres} | Homens: ${qtdHomens} | Outros: ${qtdOutros}`);
console.log("=================================");

alert("Pesquisa finalizada! Verifique os resultados no console (F12).");