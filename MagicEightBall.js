let userName = ''; // new variable
userName === 'Soli' ? console.log('Hello Soli') : console.log('Hello!'); // conditional statement

const userQuestion = 'Will you become a werewolf tonight?'; // var
console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random()* 8);
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall= 'It is certain';
  break;
  case 1 :
    eightBall = 'It is decidedly so';
    break;
  case 2: 
    eightBall = 'Reply hazy try again';
    break;
    
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4: 
    eightBall = 'Do not count on it';
  case 5: 
    eightBall = 'My sources say no' ;
   break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(`The eight ball answered: ${eightBall}`);
