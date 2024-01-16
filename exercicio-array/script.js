function clicou() {
   let items = ['notebook', 'caneta', 'rodo', 'panela'];
   console.log('esse é o Array:');
   console.log(items);
   console.log('esse item esta na posição 2 do array:' + items[2] );
   console.log('Agora vou trocar um ítem por outro');
   items.splice(2, 1, 'vassoura');
   console.log(items);
   console.log('Agora vou adicionar um ítem:');
   items.push('relógio')
   console.log(items)
   console.log('o Array possui:' + Array.length + ' items.')
} 