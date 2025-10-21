//* Limpar página para iniciar
let totalGeral = 0;
let carrinhoItens = [];

limpar();
 
function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = Number(document.getElementById('quantidade').value);

    if (quantidade <= 0 || isNaN(quantidade)){
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    // Separa nome e valor
    let partes = produto.split(' - R$');
    let nomeProduto = partes[0].trim(); // Adiciona .trim()
    let valorUnitario = Number(partes[1]);

    //* Calcular Subtotal: Atualização dinâmica do valor total dos itens.
    let preco = quantidade * valorUnitario;

    //Adiciona o item ao array de rastreamento
    carrinhoItens.push({
        id: `${nomeProduto.replace(/\s/g, '')}-${Date.now()}`,
        nome: nomeProduto,
        quantidade: quantidade,
        valorTotalItem: preco
    });

    //* Atualiza o carrinho visual
    atualizarCarrinhoVisual();

    //* Adicionar produto no carrinho
    let carrinho = document.getElementById('lista-produtos');
    
    // Cria um ID único para o item 
    let itemId = `${nomeProduto.replace(/\s/g, '')}-${Date.now()}`;

   // Adiciona o botão 'Remover' e o 'id' ao elemento
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto" id="${itemId}">
            <span class="texto-rosa">${quantidade}x</span> 
            ${nomeProduto} 
            <span class="texto-rosa">R$${preco.toFixed(2)}</span>
            <button class="remover-item" onclick="removerItem('${itemId}', ${preco})">Remover</button>
        </section>`;
        

    //* Calcular Valor Final: Cálculo do valor total da compra (Subtotal).
    totalGeral += preco;
    atualizarTotal();

    // * limpa o campo de 'quantidade' após adicionar o produto
    document.getElementById('quantidade').value = '';
}

//Função auxiliar para atualizar o valor total e formatar
function atualizarTotal() {
    let campoTotal = document.getElementById('valor-total');
    // toFixed(2) para duas casas decimais
    campoTotal.textContent = `R$${totalGeral.toFixed(2)}`;
}

// Função para remover itens específicos
function removerItem(itemId, precoItem){
    totalGeral -= precoItem;
    
    if (totalGeral < 0) {
        totalGeral = 0;
    }

    // Remove o elemento visualmente do DOM usando o ID
    const elementoRemover = document.getElementById(itemId);
    if (elementoRemover) {
        elementoRemover.remove();
    }
    
    atualizarTotal();
}

//* Limpar Carrinho
function limpar(){
    totalGeral = 0;

    document.getElementById('lista-produtos').innerHTML = '';
    
    atualizarTotal();
}

limpar();