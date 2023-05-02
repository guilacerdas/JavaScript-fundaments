
function clicou() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
         return response.json();
      })
      .then((json) => {
         alert(`Titulo do primeiro post: ${json[0].title}`);
      })
      .catch((error) => {
         console.log('Deu Ruim');
         console.log(error)
      })
      .finally(() => {
         alert('acabou a requisição')
      })
   
   alert('Opa, clicou e a função é assíncrona :P');
}

function insert() {
   fetch('https://jsonplaceholder.typicode.com/posts',
      {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify({
            title: "título",
            body: 'Corpor de teste',
            userId: 2
         })
      }
   )
      .then((response) => {
         return response.json();
      })
      .then((json) => {
         console.log(json)
      })
}
