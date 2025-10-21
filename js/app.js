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

    // Adiciona o item ao array de rastreamento
    // NOVIDADE: Gera o ID aqui para ser usado no array e no visual
    const itemId = `${nomeProduto.replace(/\s/g, '')}-${Date.now()}`;

    carrinhoItens.push({
        id: itemId,
        nome: nomeProduto,
        quantidade: quantidade,
        valorTotalItem: preco
    });

    // CORREÇÃO 2: Remove a lógica duplicada e usa apenas a função que reconstrói o visual
    atualizarCarrinhoVisual();

    //* Calcular Valor Final
    totalGeral += preco;
    atualizarTotal();

    // * Reseta o campo de 'quantidade' para 1 (melhor UX)
    document.getElementById('quantidade').value = 1; 
}

// NOVIDADE: Função auxiliar para atualizar o HTML da lista de produtos (necessária para 'limpar' e 'remover')
function atualizarCarrinhoVisual() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = ''; // Limpa antes de reconstruir

    carrinhoItens.forEach(item => {
        // Usa os dados do array para criar o HTML
        carrinho.innerHTML += `
            <section class="carrinho__produtos__produto" id="${item.id}">
                <span class="texto-rosa">${item.quantidade}x</span> 
                ${item.nome} 
                <span class="texto-rosa">R$${item.valorTotalItem.toFixed(2)}</span>
                <button class="remover-item" onclick="removerItem('${item.id}', ${item.valorTotalItem})">Remover</button>
            </section>`;
    });
}

// Função auxiliar para atualizar o valor total e formatar
function atualizarTotal() {
    let campoTotal = document.getElementById('valor-total');
    // toFixed(2) para duas casas decimais
    campoTotal.textContent = `R$${totalGeral.toFixed(2)}`;
}

// Função para remover itens específicos
function removerItem(itemId, precoItem){
    // NOVIDADE: 1. Remove o item do array 'carrinhoItens'
    const index = carrinhoItens.findIndex(item => item.id === itemId);
    if (index > -1) {
        carrinhoItens.splice(index, 1);
    }
    
    // 2. Atualiza o total
    totalGeral -= precoItem;
    if (totalGeral < 0) {
        totalGeral = 0;
    }

    // 3. Atualiza o visual
    atualizarCarrinhoVisual(); // Reconstroi o HTML sem o item
    atualizarTotal();
}

// NOVIDADE: Função para enviar pedido para WhatsApp
function enviarPedidoWhatsapp() {
    if (carrinhoItens.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de enviar o pedido.");
        return;
    }

    // 1. Número de telefone de destino (EXEMPLO: Troque pelo número real)
    const telefone = "5512999998888"; 

    // 2. Monta o cabeçalho da mensagem
    let mensagem = `Olá, gostaria de fazer o seguinte pedido na Playtime Store:\n\n*ITENS DO PEDIDO:*\n`;

    // 3. Adiciona cada item do carrinho à mensagem
    carrinhoItens.forEach(item => {
        mensagem += `${item.quantidade}x ${item.nome} (R$${item.valorTotalItem.toFixed(2)})\n`;
    });

    // 4. Adiciona o total
    mensagem += `\n*VALOR TOTAL:* R$${totalGeral.toFixed(2)}`;
    mensagem += `\n\n_Aguardo a confirmação!_`;

    // 5. Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // 6. Abre o link do WhatsApp
    const linkWhatsapp = `https://wa.me/${telefone}?text=${mensagemCodificada}`;
    window.open(linkWhatsapp, '_blank');
}

//* Limpar Carrinho
function limpar(){
    totalGeral = 0;
    // CORREÇÃO: Zera o array de itens
    carrinhoItens = []; 

    // CORREÇÃO: Usa a função para limpar o visual
    atualizarCarrinhoVisual();
    atualizarTotal();
}