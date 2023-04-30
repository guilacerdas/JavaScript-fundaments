const isMember = true;
const shipping = isMember ? 2 : 10;
console.log(isMember ? 'Memnber' : 'Not Member');
console.log("Frete: " + shipping);


const age = 90;
const isAdult = (age >= 18 ? true : false);
console.log(isAdult)