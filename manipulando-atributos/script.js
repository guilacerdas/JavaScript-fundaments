function clicou() {
    const input = document.querySelector('input');
    
 
 
 
    const botao = document.querySelector('botao');

    if (input.getAttribute('type') === 'text') {

        input.setAttribute('type', 'password');
        botao.innerText = 'Mostrar Senha';
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = 'Ocultar Senha';
    }
} 