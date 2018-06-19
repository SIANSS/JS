var orderCount = 0;
const takeOrder = (topping, crustType) => {
  console.log('Order: ' + crustType + ' pizza topped with ' + topping);
  orderCount = orderCount + 1;
};
const getSubTotal = (itemCount) =>{
  itemCount = itemCount * 7.5;
  return itemCount;
}
takeOrder('mushroom', 'thin crust');
takeOrder('spinach', 'whole wheat');
takeOrder('pepperoni', 'brooklyn style');
console.log(getSubTotal(orderCount));
var nopiz = 0;

