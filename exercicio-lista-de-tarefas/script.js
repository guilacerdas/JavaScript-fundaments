const input = document.getElementById('input');
input.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        const novaAtividade = input.value;
        const novoLi = document.createElement("li");
        novoLi.innerText = novaAtividade;
        document.getElementById("ul").appendChild(novoLi);
        input.value = " ";
    }
}

);







