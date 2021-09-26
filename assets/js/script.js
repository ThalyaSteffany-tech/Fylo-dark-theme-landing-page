( () => {
const btn = document.querySelector('[data-botao]')

btn.addEventListener('click', mensagemErro)

function mensagemErro (evento) {
    const inputEmail = document.querySelector('[data-input-email]')
    const form = document.querySelector('[data-form]')
    const inputValor = inputEmail.value
    const p  = document.createElement('p')
    const campoVazio = inputValor.length == 0
    if(campoVazio) {
        evento.preventDefault()
        p.innerText = 'Please enter a valid email address'
        p.classList.add('mensagemErro')
        form.appendChild(p)
    }
} 

})()