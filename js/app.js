//* Limpar página para iniciar
let totalGeral = 0;
document.getElementById('lista-produtos') = '';
document.getElementById('valor-total') = '';

//* Adicionar Itens: Inclusão de novos produtos no carrinho. (recuperar nome, quantidade, e preço)
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('$')[1];

    //* Calcular Subtotal: Atualização dinâmica do valor total dos itens.
    let preco = quantidade * valorUnitario;

    //* Adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos');   
    carrinho.innerHTML = carrinho.innerHTML + `<span class="texto-laranja">${quantidade}</span> ${nomeProduto} <span class="texto-laranja">R$${preco}</span>` 

    //* Calcular Valor Final: Cálculo do valor total da compra (Subtotal).
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$${totalGeral}`;


    alert('Produto: ' + produto);
    alert('Quantidade: ' + quantidade);
    alert('Nome: ' +nomeProduto);
    alert('Preço unitario: R$' + precoUnidade);
    alert('Preço final: R$' +precoTotalProduto);
}




//* Remover Itens: Exclusão de produtos específicos do carrinho.

//* Limpar Carrinho: Função para remover todos os itens e zerar os valores.
function limpar(){

}