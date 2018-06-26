var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    count = count + 1;
    break;
    case 3:
    count = count + 1;
    break;
    case 4:
    count = count + 1;
    break;
    case 5:
    count = count + 1;
    break;
    case 6:
    count = count + 1;
    break;
    case 7:
    count = count + 0;
    break;
    case 8:
    count = count + 0;
    break;
    case 9:
    count = count + 0;
    break;
    case 10:
    case 'J':
    count = count - 1;
    break;
    case 'Q':
    count = count - 1;
    break;
    case 'K':
    count = count - 1;
    break;
    case 'A':
    count = count - 1;
    break;
  }
  if(count <= 0){
    var decision = "Hold";
  }else{
    decision = "Bet";
  }
  console.log(count + decision);
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);
