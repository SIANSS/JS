let groceries = ['whole wheat flour', 'brown sugar', 'salt', 'cranberries', 'walnuts'];

groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});



//--------------------------------------------------------------------------------------------------------
//one way to iterate through fruits
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruitItem => console.log("I want to eat a mango "+fruitItem));

//--------------------------------------------------------------------------------------------------------
//another way
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(function(fruitItem){
  console.log("I want to eat a "+fruitItem);
});
