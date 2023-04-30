const fruits = ['apple', 'pineapple', 'banana'];

// for (let i = 0; i <= 100; i++){
//    console.log('número: ', i);
// }

for (let i = 0; i <= 3; i++){
   if (i === 0) {
      console.log('Ínicio da lista')
   }
   if (i === fruits.length) {
      console.log('Fim da lista')
   } else {
      console.log(fruits[i]);   
   }
   
}