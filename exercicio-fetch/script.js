 async function loadPosts() {

   const postsArea = document.getElementById('posts');
   postsArea.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'

    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const json = await response.json();
    console.log(json)
    const data = json.results
    console.log(data)
    const numberOfRequests = json.info.pages 
    console.log(numberOfRequests)
   
   
    if (json.results.length > 0) {
      // for (let j = 2 ; j <= numberOfRequests; j++){
      //    const urlRequest = `https://rickandmortyapi.com/api/character/?page=${j}`;
      //    console.log(urlRequest);
      //    const responses = fetch(`"${urlRequest}"`);
      //    console.log(responses)
      // }  
       postsArea.innerHTML = '';
       for (let i in data) {
          let postHtml = `<div style="display:flex;flex-direction:column;"><img src="${data[i].image}" alt="${data[i].name}" style="border-radius:100%;" ><div style="display:flex;"><h1>${data[i].name}</h1><div style="display:flex;gap:5%"><p>${data[i].species}:</p><p>${data[i].status}</p></div></div></div>`;
          postsArea.innerHTML += postHtml;
       }
       
    } else {
       postsArea.innerHTML = 'nenhum Post Para Exibir';
    }
    
 
}

loadPosts();