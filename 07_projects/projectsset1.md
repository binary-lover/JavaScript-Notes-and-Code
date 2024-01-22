# projects related to markdown

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-adqzbr?file=index.html)

# solution code

### project 1 Solution

```javaScript
function changeColo(color){
  document.body.style.backgroundColor=color
}


const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click',()=>{changeColo(button.id)});
  
})


```

### project 2 solution

```Javascript
const form = document.querySelector('form')
// const button = document.querySelector("button")

function BMITracker(height,weight){
  const BMI =  weight/(height*height)
  console.log(BMI)
  return BMI
}

function BMIFeedback(BMI,results){
  const feedback = document.createElement('span')
  if(BMI<=18.6){
    feedback.innerHTML = `Under Weight = Less than 18.6`
  } else if(BMI>18.6 && BMI <24.9){
    feedback.innerHTML = "Normal Range = 18.6 and 24.9"
  }else if(BMI>=24.9){
    feedback.innerHTML = "Overweight = Greater than 24.9"
  }
  results.appendChild(feedback)
}

form.addEventListener('submit',function (e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  
  if (height == '' || height <0 || isNaN(height)){
    results.innerHTML = 'please enter a valid height'
  } else if (weight == '' || weight <0 || isNaN(weight)){
    results.innerHTML = 'please enter a valid weight'
  } else{
    const heightInMeters = height/100
    const BMI = Math.round(BMITracker(heightInMeters,weight))
    results.innerHTML =`<span>${BMI}</span><br>`
    BMIFeedback(BMI,results)
  }
});

```

### Project 3 solution

```javascript
let clock = document.getElementById('clock');
        setInterval(function(){
            let time = new Date();
            let currentTime = time.toLocaleTimeString();
            clock.innerHTML = currentTime;
            
        }, 1000)

```

### Project 4 solution

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess > 100 || guess < 1) {
    alert('Enter enter a number between 1-100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuess(guess);
      displayMassage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMassage('You guessed it right..!');
    endGame();
  } else if (guess > randomNumber) {
    displayMassage('you guessed greater number');
  } else if (guess < randomNumber) {
    displayMassage('you guessed smaller number');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML = `${prevGuess}`;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMassage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener("click",function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 0
    guessSlot.innerHTML=""
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute("disabled")
    submit.removeAttribute("disabled")
    startOver.removeChild(p)

  playGame = true
  })
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute("disabled","")
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

```

### Project 5 solution

```js
const incert = document.getElementById('insert')

// const elm = document.createElement('span')
window.addEventListener('keydown',function(e){
  lucky = `
  <div class = 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " "? "Space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div>
`
incert.innerHTML = lucky
})

```

### Project 6 solution

```js
let body = document.body
const start = document.getElementById('start');
const stop = document.getElementById('stop');


let randomColor = function(){
  const RandomcolorR = String(Math.floor(Math.random()*16).toString(16)) + String(Math.floor(Math.random()*16).toString(16))
  const RandomcolorG = String(Math.floor(Math.random()*16).toString(16)) + String(Math.floor(Math.random()*16).toString(16))
  const RandomcolorB = String(Math.floor(Math.random()*16).toString(16)) + String(Math.floor(Math.random()*16).toString(16))
  const color = `#${RandomcolorR}${RandomcolorG}${RandomcolorB}`
  return color
}

const changeColor = function(){
  body.style.background = randomColor()
  console.log(randomColor())
}

let sInterval = null;

start.addEventListener('click',function(e){
  if(sInterval == null){
    sInterval = setInterval(changeColor,1000)
  }
});

stop.addEventListener('click',function(e){
  clearInterval(sInterval) 
  sInterval = null;
}); 
```
