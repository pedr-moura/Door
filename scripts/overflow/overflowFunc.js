
function start(nome) {
    limparForm()
    padronizarMenus() 
    iniciarSelecao()
    nome.display = 'block'
}
function close(nome) {
    nome.display = 'none'
    padronizarMenus() 
    limparForm()
}

function showMenuCompra(){
    if (showCompra.display == 'none') {
        start(showCompra)
        pintarMenu(selectCompra)
        nomearSessao('Registrar Entrada')
        formCompra()
    }else{
        close(showCompra)
        limparSessao()
    }
}
function showMenuVenda(){
    if (showVenda.display == 'none') {
        start(showVenda)
        pintarMenu(selectVenda)
        nomearSessao('Registrar Saída')
    }else{
        close(showVenda)
        limparSessao()
    }
}
function showMenuEstoque(){
    if (showEstoque.display == 'none') {
        start(showEstoque)
        pintarMenu(selectEstoque)
        nomearSessao('Estoque')
    }else{
        close(showEstoque)
        limparSessao()
    }
}