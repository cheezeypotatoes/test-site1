let words = ['jedi', 'lightsaber', 'empire', 'vader', 'skywalker', 'yoda', 'clones', 'kenobi', 'stormtrooper', 'padme', 'palpatine', 'kamino', 'rebels', 'sidious', 'chewbacca', 'tatooine', 'naboo', 'coruscaunt', 'xwing', 'zuckuss']
let randomWord = ""
let letter = ""
let result = ""
let checkIndex = 0
let joinArr = ''
let attemptsLeft = 6
let start = document.querySelector('#start')
let submitLetter = document.querySelector('#submitLetter')
let letterGuess = document.querySelector('#letter')
let display = document.querySelector('#display')
let playerNameInput = document.querySelector('#playerInput')
let lettersGuessed = document.querySelector('#lettersGuessed')
let list = document.querySelectorAll('li')
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
 list[0].textContent = 'Guess a Letter'
 list[1].textContent = 'Guesses Left: 6'
 playerInput.value = ''
 chooseWord ()
 blanksFromAnswer(randomWord)
}


function gameReset() {
  document.getElementById("letter").disabled = false
  list[0].textContent = ''
  list[1].textContent = ''
  joinArr = ''
  result = ''
  playerName = ''
  attemptsLeft = 6
  let welcomeMessage = document.querySelector('h1')
  welcomeMessage.textContent = ''
  lettersGuessed.innerHTML = ''
  display.textContent = ''
}


function chooseWord () {
   randomWord = words[Math.floor(Math.random() * words.length)]
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
  checkLetter (letter, result, randomWord)
}


function showProgress () {
  document.querySelector('.progressHolder').innerHTML = joinArr
}


function checkLetter (letter, shown, answer) {
  lettersGuessed.innerHTML += letter.toUpperCase()
  if(answer.indexOf(letter) === -1) {
    // isWrong = true
    attemptsLeft --
    list[0].textContent = 'INCORRECT!'
    list[1].textContent = 'Guesses Left: ' + attemptsLeft
    if ( attemptsLeft === 0) {
      document.getElementById("letter").disabled = true
      gameReset()
      return alert('you lost buddy! The word was ' + randomWord)
    }
  } else {
  list[0].textContent = 'CORRECT!'
  let arr = shown.split("")
  let i = -1
  do {
    i = answer.indexOf(letter, ++i)
    arr[i] = letter
  } while (i != -1)
      joinArr = arr.join("")
      // nextLetter(joinArr);
      display.innerHTML = joinArr
      if(joinArr === randomWord) {
        document.getElementById("letter").disabled = true
        gameReset()
        return alert('yes the word was ' + randomWord + ' Good job ' + playerName + ' you won!')
      }
    return joinArr
  }
}
