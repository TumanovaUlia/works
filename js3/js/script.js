var square = document.createElement('div');
square.classList.add('square');

var h1 = document.createElement('h1');

square.style.border = '1px solid black';
square.style.width = '1320px';
square.style.height = '700px';

var parent = document.getElementsByTagName('body');
document.body.appendChild(square);
square.appendChild(h1);
h1.innerHTML = 'Тест по программированию';
h1.style.textAlign = 'center';
h1.style.fontFamily = 'Arial';
h1.style.fontSize = '20px';

var ul = document.createElement('ul');
square.appendChild(ul);
ul.style.listStyleType = 'decimal';

var liF = document.createElement('li');
ul.appendChild(liF);
liF.innerHTML = 'Вопрос №1';
liF.style.fontFamily = 'Arial';
liF.style.fontSize = '20px';

var inputF = document.createElement('input');
ul.appendChild(inputF);
inputF.type = 'checkbox';
inputF.name = 'inputF';
inputF.style.marginTop = '15px';
inputF.style.marginBottom = '8px';

   var labelF = document.createElement('label');
   ul.appendChild(labelF);
   labelF.innerHTML = 'Вариант ответа №1';
   labelF.style.fontFamily = 'Arial';
   labelF.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var inputS = document.createElement('input');
ul.appendChild(inputS);
inputS.type = 'checkbox';
inputS.name = 'inputS';
inputS.style.marginBottom = '8px';

 var labelS = document.createElement('label');
   ul.appendChild(labelS);
   labelS.innerHTML = 'Вариант ответа №2';
   labelS.style.fontFamily = 'Arial';
   labelS.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var inputT = document.createElement('input');
ul.appendChild(inputT);
inputT.type = 'checkbox';
inputT.name = 'inputT';
inputT.style.marginBottom = '15px';

 var labelT = document.createElement('label');
   ul.appendChild(labelT);
   labelT.innerHTML = 'Вариант ответа №3';
   labelT.style.fontFamily = 'Arial';
   labelT.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var liS = document.createElement('li');
ul.appendChild(liS);
liS.innerHTML = 'Вопрос №2';
liS.style.fontFamily = 'Arial';
liS.style.fontSize = '20px';

var inputF = document.createElement('input');
ul.appendChild(inputF);
inputF.type = 'checkbox';
inputF.name = 'inputF';
inputF.style.marginTop = '15px';
inputF.style.marginBottom = '8px';

   var labelF = document.createElement('label');
   ul.appendChild(labelF);
   labelF.innerHTML = 'Вариант ответа №1';
   labelF.style.fontFamily = 'Arial';
   labelF.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var inputS = document.createElement('input');
ul.appendChild(inputS);
inputS.type = 'checkbox';
inputS.name = 'inputS';
inputS.style.marginBottom = '8px';

 var labelS = document.createElement('label');
   ul.appendChild(labelS);
   labelS.innerHTML = 'Вариант ответа №2';
   labelS.style.fontFamily = 'Arial';
   labelS.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var inputT = document.createElement('input');
ul.appendChild(inputT);
inputT.type = 'checkbox';
inputT.name = 'inputT';
inputT.style.marginBottom = '15px';

 var labelT = document.createElement('label');
   ul.appendChild(labelT);
   labelT.innerHTML = 'Вариант ответа №3';
   labelT.style.fontFamily = 'Arial';
   labelT.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var liT = document.createElement('li');
ul.appendChild(liT);
liT.innerHTML = 'Вопрос №3';
liT.style.fontFamily = 'Arial';
liT.style.fontSize = '20px';

var inputF = document.createElement('input');
ul.appendChild(inputF);
inputF.type = 'checkbox';
inputF.name = 'inputF';
inputF.style.marginTop = '15px';
inputF.style.marginBottom = '8px';

   var labelF = document.createElement('label');
   ul.appendChild(labelF);
   labelF.innerHTML = 'Вариант ответа №1';
   labelF.style.fontFamily = 'Arial';
   labelF.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var inputS = document.createElement('input');
ul.appendChild(inputS);
inputS.type = 'checkbox';
inputS.name = 'inputS';
inputS.style.marginBottom = '8px';

 var labelS = document.createElement('label');
   ul.appendChild(labelS);
   labelS.innerHTML = 'Вариант ответа №2';
   labelS.style.fontFamily = 'Arial';
   labelS.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var inputT = document.createElement('input');
ul.appendChild(inputT);
inputT.type = 'checkbox';
inputT.name = 'inputT';
inputT.style.marginBottom = '15px';

 var labelT = document.createElement('label');
   ul.appendChild(labelT);
   labelT.innerHTML = 'Вариант ответа №3';
   labelT.style.fontFamily = 'Arial';
   labelT.style.fontSize = '17px';

var br1 = document.createElement('br');
ul.appendChild(br1);

var button = document.createElement('button');
square.appendChild(button);
button.innerHTML = 'Проверить мои результаты';
button.fontFamily = 'Arial';
button.style.fontSize = '20px';
button.style.marginLeft = '525px';
button.style.marginTop = '30px';
button.style.width = '327px';
button.style.height = '53px';
button.style.backgroundColor = '#cfe2f3';
button.style.border = '2px solid black';

