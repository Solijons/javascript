const kelvin = 0;// this is our Kelvin degree
const celsius = kelvin -273; // converting the kelvin in to celcium
let fahrenheit = celsius*(9/5) + 32; // converting celsium to fahrenheit;

fahrenheit = Math.floor(fahrenheit);// convering to math floor to get the result
console.log(`The temperature is TEMPERATURE degrees ${fahrenheit}.`); // converts result in fahrenheit.
let newton = celsius*(33/100);
newton = Math.floor(newton);
console.log(`The temperature is TEMPERATURE degrees in newton is ${newton}`);