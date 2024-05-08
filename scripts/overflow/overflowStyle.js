//-------------------------------------------------------------//
let menuCompra = document.getElementById('menuCompra')
let menuVenda = document.getElementById('menuVenda')
let menuEstoque = document.getElementById('menuEstoque')

let showCompra = menuCompra.style
let showVenda = menuVenda.style
let showEstoque = menuEstoque.style
//-------------------------------------------------------------//
let optionCompra = document.getElementById('optionCompra')
let optionVenda = document.getElementById('optionVenda')
let optionEstoque = document.getElementById('optionEstoque')

let selectCompra = optionCompra.style
let selectVenda = optionVenda.style
let selectEstoque = optionEstoque.style
//-------------------------------------------------------------//
let nomeDaSessao = document.getElementById('nome-da-sessao')
function nomearSessao(nome) {
    nomeDaSessao.innerHTML = `${nome}`
}
function limparSessao() {
    nomeDaSessao.innerHTML = ``
}
function pintarMenu(menu) {
    menu.background = '#0061a1'
    menu.color = 'white'
}
function iniciarSelecao() {
    function ocultarMenus() {
        showCompra.display = 'none'
        showVenda.display = 'none'
        showEstoque.display = 'none'
    }
    ocultarMenus()
}
function padronizarMenus() {
    selectCompra.background = '#c3c3c3'
    selectVenda.background = '#c3c3c3'
    selectEstoque.background = '#c3c3c3'

    selectCompra.color = 'black'
    selectVenda.color = 'black'
    selectEstoque.color = 'black'
}


