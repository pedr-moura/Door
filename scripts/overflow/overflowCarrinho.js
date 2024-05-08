let telaCarrinho = document.getElementById('info')
let carrinho = [];

function adicionarDadosNaTela(tipo) {
    //entrada
    if (tipo === 'entrada') {
        let inputProduto = document.getElementById('nome_do_produto').value.trim();
        let inputQuantidade = document.getElementById('quantidade').value.trim();
        let inputValor = document.getElementById('valor_und').value.trim();
        let inputFornecedor = document.getElementById('nome_do_fornecedor').value.trim();
        let inputChave = document.getElementById('chave_nota_fiscal').value.trim();

        // Verifica se algum campo está vazio
        if (inputProduto === '' || inputQuantidade === '' || inputValor === '' || inputFornecedor === '' || inputChave === '') {
            alert("Por favor, preencha todos os campos.");
            return; // Encerra a execução da função se algum campo estiver vazio
        }

        let novoItem = {
            produto: inputProduto,
            quantidade: inputQuantidade,
            valor: inputValor,
            fornecedor: inputFornecedor,
            chave: inputChave
        };

        carrinho.push(novoItem);

        atualizarTelaCarrinho(); 
    }
}

function atualizarTelaCarrinho() {
 
    telaCarrinho.innerHTML = '';
    for (let c = 0; c < carrinho.length; c++) {
        const adicionado = carrinho[c];

        telaCarrinho.innerHTML += ` 
        <b>${adicionado.quantidade}</b> -
        ${adicionado.produto}
         <button onclick="removeDoCarrinho(${c})" style="border: none;background: red;color: white;cursor: pointer;margin: 2px;padding: 5px;border-radius: 7px;"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16"><path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/></svg></button><br>`
    }
}

function removeDoCarrinho(n){
    carrinho.splice(n, 1)
    atualizarTelaCarrinho()
}

function lancarRegistro() {
    if (carrinho.length === 0) {
        alert("Por favor, adicione itens antes de lançar o registro.");
        return; // Encerra a execução da função se o carrinho estiver vazio
    }

    // Serializa o array carrinho para uma string JSON
    const carrinhoJSON = JSON.stringify(carrinho);

    const url = 'url_da_api?' + encodeURIComponent('carrinho') + '=' + encodeURIComponent(carrinhoJSON);

    window.location.href = url;
}