function numAdd (num1, num2) {
  var sum = num1 + num2;
  return sum
}


function numSub (num1, num2) {
  var difference = num1 - num2;
  return difference
}


function numDiv (num1, num2) {
  if (num2 === 0 || num1 === 0) {
    return alert ("Hey Einstein, you can not divide by zer0")
  } else
  var quotient = num1 / num2;
  return quotient
}


function numMultiply (num1, num2) {
  var product = num1 * num2;
  return product
}


function operate(operator, num1, num2) {
  if (operator === '+') {
    return  numAdd(num1, num2)
  } else if (operator === '-') {
    return numSub(num1, num2)
  } else if (operator === '*') {
    return numMultiply(num1, num2)
  } else if (operator === '/') {
    return numDiv(num1, num2)
  }
}


let display = document.querySelector('#display')
let number = document.querySelectorAll('.number')
let operators = document.querySelectorAll('.operator')
let equals = document.querySelector('.equal')
let clear = document.querySelector('.clear')
let op = ''
// let num2 = 0
// let num1 = 0


for (let i = 0; i < number.length; i++) {
  number[i].addEventListener('click', (e) => {
    display.textContent += number[i].value
    num2 = Number(display.innerHTML)
  })
}


for (let i2 = 0; i2 < operators.length; i2++) {
  operators[i2].addEventListener('click', (e) => {
    num1 = num2
    display.innerHTML = ''
    op = operators[i2].value
  })
}


equals.addEventListener('click', (e) => {
  display.innerHTML = ''
  let result = operate(op, num1, num2)
  display.innerHTML = result
})


clear.addEventListener('click', (e) => {
  num1 = 0
  num2 = 0
  display.innerHTML = ''
})
