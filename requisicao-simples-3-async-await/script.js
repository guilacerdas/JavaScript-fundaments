
async function clicou() {
   const req = await fetch('https://jsonplaceholder.typicode.com/posts');
   const json = await response.json();
   alert(`Titulo do primeiro post: ${json[0].title}`);
   
   alert('Opa, clicou :P');
}

async function insert() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts',
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
   const json = await response.json()
   console.log(json)
}
