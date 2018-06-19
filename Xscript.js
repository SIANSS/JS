function adder(){
  var x,y;
  x = document.getElementById('val1').innerHTML;
  y = document.getElementById('val2').innerHTML;

  var total = x + y;
  document.getElementById('total').innerHTML = total;
}
