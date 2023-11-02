// Selecionar todos elementos da classe 'produto_preco'

const arrayPrecos = document.getElementsByClassName("produto_preco");

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)

let total = 0;

for (let index = 0; index < arrayPrecos.length; index++) {
    const preco = arrayPrecos[index].innerText;
    total +=  parseFloat(preco)
    console.log(total)
    
}
// Escrever no conteúdo da página o valor da soma 
document.write("Total: R$ " +total)