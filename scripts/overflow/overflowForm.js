//menus de funcionalidade

let subtela = document.getElementById('subtela')

function limparFuncoes() {
    subtela.style.display = 'none'
}
function showFuncoes(nome){
    if (subtela.style.display == 'none') {
        subtela.style.display = 'block'
        subtela.innerHTML = `               
        <p>${nome}:</p>
        <button class="select">Consultar</button>
        <button class="select" onclick="formCadastro${nome}();
        nomearSessao('Cadastrar  ${nome}')">Cadastrar ${nome}</button>`
    }else{
        subtela.style.display = 'none'
    }
}

//formularios Compra
let formularios = document.getElementById('formularios')

function limparForm() {
    formularios.innerHTML = ``
}
function formCompra() {
    formularios.innerHTML = `
        <!-- form inicial Compra -->

        <div class="input-group">
            <label for="nome_do_produto">Selecione o Produto</label>
            <select name="nome_do_produto" id="nome_do_produto">
                ${produtos.map(produto => `<option value="${produto}">${produto}</option>`).join('')}
            </select>
        </div>

        <div class="input-group">
            <label for="quantidade">Quantidade</label>
            <input type="number" name="quantidade" id="quantidade" min="1">
        </div>

        <div class="input-group">
            <label for="valor_und">Valor UND</label>
            <input type="number" name="valor_und" id="valor_und"  min="0.01" step="0.01">
        </div>

        <div class="input-group">
            <button onclick="adicionarDadosNaTela('entrada')" class="btn-adicionar">Adicionar</button>
        </div>

        <div class="input-group">
            <label for="nome_do_fornecedor">Selecione o Fornecedor</label>
            <select name="nome_do_fornecedor" id="nome_do_fornecedor">
                ${fornecedor.map(fornecedor => `<option value="${fornecedor}">${fornecedor}</option>`).join('')}
            </select>
        </div>

        <div class="input-group">
            <label for="chave_nota_fiscal">Chave de acesso</label>
            <input type="number" name="chave_nota_fiscal" id="chave_nota_fiscal">
        </div>

        <div class="input-group">
            <input onclick="lancarRegistro()" type="submit" value="Lançar" name="submit" class="submit">
        </div>
    `;
}


function formCadastroFornecedor() {
    formularios.innerHTML = `
    <!-- form inicial cadastro fornecedor -->

    <div class="input-group">
        <label for="cpnj_fornecedor">CNPJ/CPF</label>
        <input type="number" name="cpnj_fornecedor" id="cpnj_fornecedor" max="99999999999999">
    </div>

    <div class="input-group">
        <label for="razao_fornecedor">Razão Social</label>
        <input type="text" name="razao_fornecedor" id="razao_fornecedor">
    </div>

    <div class="input-group">
        <label for="inscricao_fornecedor">IE/RG</label>
        <input type="number" name="inscricao_fornecedor" id="inscricao_fornecedor" min="1">
    </div>

    <div class="input-group">
        <label for="cidade_fornecedor">Cidade</label>
        <input type="text" name="cidade_fornecedor" id="cidade_fornecedor">
    </div>

    <div class="input-group">
        <label for="rua_fornecedor">Rua</label>
        <input type="text" name="rua_fornecedor" id="rua_fornecedor">
    </div>

    <div class="input-group">
        <label for="num_rua_fornecedor">Nº</label>
        <input type="text" name="num_rua_fornecedor" id="num_rua_fornecedor">
    </div>

    <div class="input-group">
        <label for="bairro_fornecedor">Bairro</label>
        <input type="text" name="bairro_fornecedor" id="bairro_fornecedor">
    </div>

    <div class="input-group">
        <label for="cep_fornecedor">CEP</label>
        <input type="text" name="cep_fornecedor" id="cep_fornecedor">
    </div>
    
    <div class="input-group">
        <label for="complemento_fornecedor">Complemento</label>
        <input type="text" name="complemento_fornecedor" id="complemento_fornecedor">
    </div>
    
    <div class="input-group">
        <label for="telefone_fornecedor">Telefone</label>
        <input type="text" name="telefone_fornecedor" id="telefone_fornecedor">
    </div>

    <div class="input-group">
        <label for="conta_bancaria_fornecedor">Conta Bancária</label>
        <input type="text" name="conta_bancaria_fornecedor" id="conta_bancaria_fornecedor" placeholder="opcional">
    </div>

    <div class="input-group">
        <input type="submit" value="Lançar" name="submit" class="submit">
    </div>
    `
    limparFuncoes()
}
function formCadastroProdutos() {
    formularios.innerHTML = `
    
    `
    limparFuncoes()
}