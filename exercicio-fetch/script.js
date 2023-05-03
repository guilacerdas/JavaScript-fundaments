 async function loadPosts() {

   const postsArea = document.getElementById('posts');
   postsArea.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'

    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const json = await response.json();
    const data = json.results

   
    if (json.results.length > 0) {
       postsArea.innerHTML = '';
       for (let i in data) {
          let postHtml = `<div style="display:flex;flex-direction:column;"><img src="${data[i].image}" alt="${data[i].name}" style="border-radius:100%;" ><div style="display:flex;"><h1>${data[i].name}</h1><div style="display:flex;gap:5%"><p>${data[i].species}:</p><p>${data[i].status}</p></div></div></div>`;
          postsArea.innerHTML += postHtml;
       }         
    } else {
       postsArea.innerHTML = 'nenhum Post Para Exibir';
    }
}

async function addNewPost(title, body) {
   await fetch('https://jsonplaceholder.typicode.com/posts',
      {
         method: 'POST',
         headers: {
            'content-Type': 'application/json'
         },
         body: JSON.stringify({
            title: title,
            body: body,
            userID: 2
         })
      }
   );
   document.querySelector('#titleField').value = '';
   document.querySelector('#bodyField').value = '';
   loadPosts();
}
document.querySelector("#insertButton").addEventListener('click', () => {
   const title = document.querySelector("#titleField").value;
   const body = document.querySelector("#bodyField").value;
   if (title && body) {
      addNewPost(title, body);
   } else {
      alert('preencha todos os campos')
   }
})
loadPosts();