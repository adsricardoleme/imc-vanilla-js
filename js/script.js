/**
 * Configura a data limite do nascimento
 * @author Ricardo Leme <ricardo.leme@gmail.com>
 * @since 2026-02-24
 * @version 1.0.0
 * @description Esta função busca o campo data pelo id e aplica o atributo max com o dia atual.
 */
function configuraDataLimite(){
    const limite = new Date().toISOString().split('T')[0]
    const inputNasc = document.getElementById('nascimento')
    if(inputNasc){
        inputNasc.setAttribute('max', limite)
    }
}

//Inicialização
document.addEventListener('DOMContentLoaded', configuraDataLimite)