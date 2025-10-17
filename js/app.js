//* Limpar página para iniciar


//* Adicionar Itens: Inclusão de novos produtos no carrinho. (recuperar nome, quantidade, e preço)
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let precoUnidade = produto.split('$')[1];

    //* Adicionar produto no carrinho
    

    //* Calcular Subtotal: Atualização dinâmica do valor total dos itens.
    let precoTotalProduto = precoUnidade * quantidade;

    




    alert('Produto: ' + produto);
    alert('Quantidade: ' + quantidade);
    alert('Nome: ' +nomeProduto);
    alert('Preço unitario: R$' + precoUnidade);
    alert('Preço final: R$' +precoTotalProduto);
}



//* Calcular Valor Final: Cálculo do valor total da compra (Subtotal + Frete/Taxas, se aplicável).
//* Remover Itens: Exclusão de produtos específicos do carrinho.

//* Limpar Carrinho: Função para remover todos os itens e zerar os valores.
function limpar(){

}