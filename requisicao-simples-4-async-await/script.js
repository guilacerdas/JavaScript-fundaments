
function clicou() {
   fetch('https://private-anon-2046deaec1-pizzaapp.apiary-mock.com/restaurants/2/menu')
      .then(function (menu) {
         return menu.json();
      })
      .then(function (json) {
         buildData(json)
      })
      .catch(function (error) {
         console.log('Deuruim');
      });
}

function buildData(list) {
   let item = '';
   for (let i = 0; i < list.length; i++) {
      item += '<h2>' + list[i].category + '</h2>' + '<h3>' + list[i].name + '</h3>'
      console.log(list[i].topping)
      if (list[i].topping != undefined) {
         for (let j in list[i].topping) {
            item += list[i].topping[j]+ ' '
            console.log(list[i].topping[j])
         } 
      }
      item += 'R$ ' + list[i].price;
      item += '<hr/>'
   }
   document.getElementById("posts").innerHTML += item
}
   
