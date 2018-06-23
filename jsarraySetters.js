let person = {
  _name: 'Lu Xun',
  _age: 137,

  set age(number){
  if(typeof number === 'number'){
    this._age = number;
    console.log(`${number} is valid input`);
  }else{
      console.log(`Invalid input`);
    }
}
};
person.age = 'Thirty-nine'; //accessing an method or setter method written inside arrays
