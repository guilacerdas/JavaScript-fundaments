function validation(value1, value2) {
   if (value1 === 'pedro' && value2 === '123') {
      return true;
   } else {
      return false;
   }
   
}

const user = 'pedro'
const password = '123'
const validate = validation(user, password)

if (validate) {
   console.log(validate , '  Acesso concedido')
} else {
   console.log(validate, '   Acesso negado')
}