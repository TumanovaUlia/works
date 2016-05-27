
var num = prompt('Input number','');
var exp = prompt('Input exponent', '');

if (exp < 0) {
  alert ('Exponent ' + exp + 
		 ' is not allow. Please, input another exponent')
} else {
  var result = Math.pow(num, exp)
  console.log('Answer= ', result);
}
