const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput ==='paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error');
  }
  };
  
  const getComputerChoice = () => {
    const ranNum = Math.floor(Math.random() *3);
    switch(ranNum){
      case 0:
        return 'rock'
        break;
      case 1:
        return 'paper'
        break;
      case 2:
        return 'scissors'
        break;
    }
  };
  
  const determineWinner = (userChoice , computerChoice) => {
    if(userChoice === computerChoice) {
      return 'This is a tie game';
    };
    
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The comp won!';
      } else {
        return 'You won!';
      }
    }
    
    if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'The comp won!';
      } else {
        return 'You won!';
      }
    }
    
    if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The comp won!';
      } else {
        return 'You won!';
      }
    }
  }
  
  
  const playGame = () => {
    const userChoice = getUserChoice('rock', 'paper', 'scissors');
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    
      console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
  
  
  
  