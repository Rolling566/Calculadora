var tela = document.getElementById('tela')

function mostrarnatela(input) {
    if (tela.value === 'ERROR'){
        tela.value = input
    }   
    else {
        tela.value += input 
    }
}
function limpartela() {
    tela.value = ''
}
function resolver() {    
    if (tela.value == 0) {
    tela.value = 'Escreva um operação'
    }
    else if (tela.value == '6+7') {
        tela.value = 'SIXX SEVENNN'
    }
    else if (tela.value == '6+9') {
        tela.value = 'SAFADO'
    }
    else {
        try {
        tela.value = eval(tela.value)
        } 
        catch (error) {
        tela.value = 'ERROR'
        }
    }
}




