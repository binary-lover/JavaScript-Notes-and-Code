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