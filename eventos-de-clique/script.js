function changeText(value) {
   const div1 = document.getElementById('test');
   const div2 = document.getElementById('test2');
   div1.firstChild.nodeValue = value;
   div2.firstChild.nodeValue = value;
}
function clicou() {
   const div1 = document.getElementById('test');
   const div2 = document.getElementById('test2');
   div1.addEventListener("click", function () { changeText("houveram mudanças depois do clique") }, false);
   div2.addEventListener("click", function () { changeText("houveram mudanças depois do clique") }, false);
}

const button = document.querySelector('.botao')

button.addEventListener("click", clicou )