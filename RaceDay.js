let raceNumber = Math.floor(Math.random() * 1000); // random number for race number

const registeredEarly = true; // var with boolen
const age = 18; // current age // please change the value to see conditional statements 

if( registeredEarly && age > 18 ) {
   raceNumber += 1000;} 
if( registeredEarly && age > 18 ) { 
   console.log(`Race will begin at 9:30  and your race number is ${raceNumber}`)}

else if ( !registeredEarly && age > 18 ) {
  console.log(`Race will begin at 11:30  and your race number is ${raceNumber}`)
}
 else if (age < 18 ) {
    console.log(`Race will begin at 12:30  and your race number is ${raceNumber}`)
 } else {
   console.log(`Please see registration desk!`);
 }
 
 
 // out put is 'Please see registration desk!'
