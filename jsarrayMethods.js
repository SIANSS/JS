let person = {
  name: 'Dimosian',
  age: 40,
  weekendAlarm : 'No alarms needed',
  weekAlarm : 'Alarm set to 7AM',
  hobbies : [],
  sayHello : () => {
    return 'Hello, there!'
    
  },
  sayGoodbye() {
      return 'Goodbye!'
    }
};
person.hobbies = ["Gaming", "9GAG"];
var day = Date();
let alarm;
if(day === 'Saturday' || day === 'Sunday'){
  alarm = "weekendAlarm";
}
else{
  alarm = "weekAlarm";
}
person.hobbies.pop();
console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
console.log(person['hobbies']);
console.log(person.sayHello());
