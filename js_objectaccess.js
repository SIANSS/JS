let person = {
  name: 'Dimosian',
  age: 40,
  weekendAlarm : 'No alarms needed',
  weekAlarm : 'Alarm set to 7AM'
};
var day = Date();
let alarm;
if(day === 'Saturday' || day === 'Sunday'){
  alarm = "weekendAlarm";
}
else{
  alarm = "weekAlarm";
}
console.log(person['name']);
console.log(person['age']);
console.log(person[alarm]);
