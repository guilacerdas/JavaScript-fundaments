function apertou() {
   console.log('evento onkeydown acontece quando usuario aperta uma tecla, mas se repete se mantém segurado');
}

function segurou() {
   console.log('evento onkeypress é quando você está segurando a tecla, nunca é o primeiro');
}

function soltou() {
   console.log('evento onkeyup acontece quando o usuário solta a tecla');
}

document.addEventListener('keydown', apertou);
document.addEventListener('keypress', segurou);
document.addEventListener('keyup', soltou);
