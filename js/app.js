//* Limpar página para iniciar
let totalGeral = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$';
 
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade <= 0){
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    let nomeProduto = produto.split('-')[0];
    let valorUnitario = Number(produto.split('$')[1]);

    //* Calcular Subtotal: Atualização dinâmica do valor total dos itens.
    let preco = quantidade * valorUnitario;

    //* Adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos');   
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-rosa">${quantidade}x</span> ${nomeProduto} <span class="texto-rosa">R$${preco}</span>
        </section>`

    //* Calcular Valor Final: Cálculo do valor total da compra (Subtotal).
    totalGeral += preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;

    // * limpa o campo de 'quantidade' após adicionar o produto
    document.getElementById('quantidade').value = '';
}

//* Limpar Carrinho
function limpar(){
    totalGeral = 0;

    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0'
}

limpar();