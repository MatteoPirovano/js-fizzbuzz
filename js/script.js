for (var i = 1;  i  <  101;  i++) {

  if (i % 15 == 0) {
    console.log('FizzBuzz');
    document.getElementById('numeri').innerHTML += '<li id="fb">' + 'FizzBuzz' + '</li>';
  } else if (i % 3 == 0) {
   console.log('Fizz');
   document.getElementById('numeri').innerHTML += '<li id="f">' + 'Fizz'+'</li>';
 }  else if (i % 5 == 0) {
   console.log('Buzz');
   document.getElementById('numeri').innerHTML += '<li id="b">' + 'Buzz' + '</li>';
 } else {
   console.log(i);
   document.getElementById('numeri').innerHTML +='<li>'+ i + '</li>';
 }
 }
