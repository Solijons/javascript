const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8
      break;
    case 'tuesday' :
      return 8
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 8
      break;
    case 'saturday':
      return 8
      break;
    case 'sunday':
      return 8
      break;
      
    default: 
      return 'Error'
  }
}

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

console.log(getSleepHours('monday'));
console.log(getActualSleepHours()); // if idealHours is 8, should print 56


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}



const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('You got perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed') 
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest');
  } else {
    console.log(' Something went wrong check your code');
  }
}

calculateSleepDebt();


// you can change the value to see other conditional statements returns


