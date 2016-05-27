var arr = [];
for (var i = 0; i < 5; i++) {
  var a = prompt('Input name', '');
  arr.push(a);
}

var userName = prompt('Please, input your name', '');
for (var i = 0; i < 5; i++){
  if (userName == arr[i]){
    var suc = 1;
  	break;
  }else{
  	var suc = 0;
  }}

   if (suc == 1){
  	alert('Your enter, ' + userName + ', was successful!');
  }else{
  	alert('Ops! We can`t let you in');
  }