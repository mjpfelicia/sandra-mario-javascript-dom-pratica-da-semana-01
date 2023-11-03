// Selecionar todos elementos da classe 'produto_preco'
const precos = document.querySelectorAll('.produto_preco');

// Inicializar uma variável para armazenar a soma
let soma = 0;

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
for ( i = 0; i < precos.length; i++) {
    const precoTexto = precos[i].innerText; // Obter Preço (txt)
    const precoNumero = parseFloat(precoTexto); // Convertendo Texto em Número (Ponto Flutuante)
  soma += precoNumero; // Somando Preço (à Soma)
}

// Escrever no conteúdo da página o valor da soma
document.write(`<p>Total: R$ ${soma.toFixed(2)} </p>`)