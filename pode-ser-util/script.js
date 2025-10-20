const botaoEnviar = document.getElementById('botao-enviar');

// recuperar e exibir valores na tela
function recuperarValores(){
    let inputNomeProduto = document.getElementById('nome-produto');
    let inputPrecoUnitario = document.getElementById('preco');
    let inputQuantidade = document.getElementById('quantidade');
    let textoTela = document.getElementById('resultado-tela');

    let nomeProduto = inputNomeProduto.value;
    let precoUnitario = inputPrecoUnitario.value;
    let quantidade = inputQuantidade.value;
    let valorFinal = precoUnitario * quantidade;


    textoTela.innerHTML = `--- DADOS DA COMPRA --- \n Produto: ${nomeProduto}.\n Valor unidade: R$${precoUnitario}\n Quantidade:${quantidade}.\n Preço Total: R$${valorFinal},00`
}

// limpar

function limparValores(){
    let inputNomeProduto = document.getElementById('nome-produto');
    let inputPrecoUnitario = document.getElementById('preco');
    let inputQuantidade = document.getElementById('quantidade');
    let textoTela = document.getElementById('resultado-tela');

    inputNomeProduto.value = '';
    inputPrecoUnitario.value = '';
    inputQuantidade.value = '';
    textoTela.innerHTML = 'Os valores do formulário aparecerão aqui após clicar no botão.';
}