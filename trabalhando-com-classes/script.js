function clicou() {
   const button = document.querySelector('button');
   
if (button.classList.contains('azul')) {
   button.classList.replace('azul', 'verde')
} else {
   button.classList.replace('verde', 'azul')
}
} 