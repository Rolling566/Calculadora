var tela = document.getElementById('tela')

function mostrarnatela(input) {
    tela.value += input;
}
function limpartela() {
    tela.value = ''
}
function resolver() {
    try {
    tela.value = eval(tela.value)
    } catch (error) {
    tela.value = 'ERROR'
    }
}