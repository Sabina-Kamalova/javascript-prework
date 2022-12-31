let randomNumber = Math.floor(Math.random() * 3 + 1);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }
  else if(argMoveId == 2){
    return 'papier';
  }
  else if(argMoveId == 3){
    return 'nożyce';
  }

  printMessage('Nie znam ruchu ' + argMoveId + '.');
  return 'nieznany ruch';
}

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);

function displayResult(){
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    console.log('hi');
  }
  else if(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  }
  else if(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  }
  else if(computerMove == playerMove){
    printMessage('Jeszcze raz!');
  }
  else {
    printMessage('Tym razem przegrywasz :(');
  }
}
  displayResult();
