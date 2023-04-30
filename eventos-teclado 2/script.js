function soltou(event) {
   console.log(event.code);
   console.log(event.key);
   console.log(event.shiftKey);
}

const input = document.querySelector('input');
input.addEventListener('keyup', soltou);
