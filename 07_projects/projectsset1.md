# projects related to markdown

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-adqzbr?file=index.html)

# solution code

### project 1 Solution

```javascript
function changeColo(color){
  document.body.style.backgroundColor=color
}


const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
  button.addEventListener('click',()=>{changeColo(button.id)});
  
})


```