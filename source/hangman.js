var words = ['jedi', 'lightsaber', 'empire', 'vader', 'skywalker', 'yoda', 'clones', 'kenobi', 'stormtrooper', 'padme', 'palpatine', 'kamino', 'rebels', 'sidious', 'chewbacca', 'tatooine', 'naboo', 'coruscaunt', 'xwing', 'zuckuss'];
var randomWord = "";
var letter = "";
var result = "";
var checkIndex = 0;
var joinArr = ''
var attemptsLeft = 5;
let start = document.querySelector('#start')
let submitLetter = document.querySelector('#submitLetter')
let letterGuess = document.querySelector('#letter')
let display = document.querySelector('#display')
let playerNameInput = document.querySelector('#playerInput')
let lettersGuessed = document.querySelector('#lettersGuessed')
letterGuess.value = ''
playerInput.value = ''



start.addEventListener('click', (e) => {
  gameRun()
})


submitLetter.addEventListener('click', (e) => {
  if(letterGuess.value === '') {
    return alert('you must enter a letter')
  }

  if (joinArr === '') {
    chooseLetter()
  } else {
    checkLetter (letterGuess.value, joinArr, randomWord);
    letterGuess.value = ''
  }
})

function gameRun () {
 playerName = playerNameInput.value
 let welcomeMessage = document.createElement('h1')
 let parentElement = document.querySelector('#left')
 parentElement.appendChild(welcomeMessage)
 welcomeMessage.textContent = 'Welcome: ' + playerName
 playerInput.value = ''
 chooseWord ()
 blanksFromAnswer(randomWord)
}


function gameReset() {
  document.getElementById("letter").disabled = false
  joinArr = ''
  result = ''
  playerName = ''
  attemptsLeft = 5
  let welcomeMessage = document.querySelector('h1')
  welcomeMessage.textContent = ''
  lettersGuessed.innerHTML = ''
}


function chooseWord () {
   randomWord = words[Math.floor(Math.random() * words.length)];
   return randomWord
}


function blanksFromAnswer ( answerWord ) {
  for (var i = 0; i < answerWord.length; i++) {
      result += '_'
  }
  display.innerHTML = result
  return result
}


function chooseLetter () {
  letter = letterGuess.value
  letterGuess.value = ''
  // lettersGuessed.innerHTML += letterGuess.value
  checkLetter (letter, result, randomWord);
}


function nextLetter (joinArr) {
  // lettersGuessed.innerHTML += letterGuess.value
  if ( attemptsLeft === 0) {
    document.getElementById("letter").disabled = true
    gameReset()
    return alert('you lost buddy! The word was ' + randomWord)
  } else
  if(joinArr === randomWord) {
    document.getElementById("letter").disabled = true
    gameReset()
    return alert('yes the word was ' + randomWord + ' Good job ' + playerName + ' you won!')
  }
  alert(joinArr + " PICK NEXT LETTER > " + attemptsLeft + " tries remaining");
}


function showProgress () {
  document.querySelector('.progressHolder').innerHTML = joinArr;
}


function checkLetter (letter, shown, answer) {
  lettersGuessed.innerHTML += letter.toUpperCase()
  if(answer.indexOf(letter) === -1) {
    isWrong = true
    attemptsLeft --
  }
  let arr = shown.split("");
  let i = -1;
  do {
    i = answer.indexOf(letter, ++i);
    arr[i] = letter;
  } while (i != -1)
      joinArr = arr.join("");
      nextLetter(joinArr);
      display.innerHTML = joinArr
      return joinArr;
}
