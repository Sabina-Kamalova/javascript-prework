function playGame(playerInput){
  clearMessages();
  const randomNumber = Math.floor(Math.random() * 3 + 1);
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

function displayResult(){
  const computerMove = getMoveName(randomNumber);
  const playerMove = getMoveName(playerInput);
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);
  if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
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
}

  document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });