(() => {
    
const inputEmail = document.querySelector('[data-input-email]')
inputEmail.addEventListener('invalid',validacaoCustomizada)
inputEmail.addEventListener('blur',validacaoCustomizada)


function validacaoCustomizada(event) {
    event.preventDefault()
    const alvo = event.target
    const erro = validaCampo(alvo)
}

function validaCampo(alvo) {
    function verificaErro() {
        let erroEncontrado = false
        for(let erroR in alvo.validity) {
           // console.log(erro + alvo.validity[erro])

           //Apenas os valores dos erros
            if(alvo.validity[erroR] && !alvo.validity.valid) {
                erroEncontrado = erroR
            }
        }
        return erroEncontrado
    }

    function mensagemCustomizada(erro) {
        let spanErro = alvo.parentNode.querySelector("[data-msgErro]")
        if(erro == 'valueMissing') {
            spanErro.classList.add('mensagemErro')
            spanErro.innerHTML = 'The field cannot be empty'
        }else if(erro == 'typeMismatch') {
            spanErro.classList.add('mensagemErro')
            spanErro.innerHTML =  'Please enter a valid email address'
        }else {
            spanErro.classList.remove('mensagemErro')
            spanErro.innerHTML = ''        
        }
    } 


    const erro = verificaErro()
    mensagemCustomizada(erro)
    
    return erro
}

})()
