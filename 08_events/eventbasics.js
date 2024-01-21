let owl = document.getElementById("owl");
// onlcick event
// owl.onclick = function(){
//     alert("you clicked owl")
// }

// alert on click
owl.addEventListener("click",function(e){
    // alert("you clicked owl")
});

// alert on hover
owl.addEventListener("mouseover",function(e){
    // console.log(e.clientX);
    // alert("you hovered on owl");
});

// what does timeStamp do?
owl.addEventListener("mouseover",function(e){
    // console.log(e.timeStamp);
});

// timestamp on click on river
// let river = document.getElementById("river");
// river.addEventListener("click",function(e){
//     // console the time in 24hr format
//     time = new Date();
//     console.log(e.timeStamp)
//     timeAfterClick = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
//     console.log(timeAfterClick);
// });

// types, timeStamp, defalut
// targate, toElement, srcElement, currentTargate
// altkey, crtlkey, shiftkey, keyCode 

// event propogation

// document.getElementById("images").addEventListener('click',function(e){
//     console.log("image click")
// }, false);
// document.getElementById("owl").addEventListener('click',function(e){
//     console.log("owl click")
//     e.stopPropagation()
//     // it will stop propogating up.
// },false);

// document.getElementById('google').addEventListener('click',function(e){
//     console.log("google clicked");
//     e.preventDefault()
//     e.stopPropagation()
// });

// here we are using event propogation to stop the event from bubbling up by givig the third parameter as true, and starts from the bottom most element and goes up to the element which is clicked.

// if we give the third parameter as True then the event will propogate in capture phase, and it starts from the top most element and goes down to the element which is clicked



// removing image on clicing
// let image = document.querySelectorAll("img")
// image.forEach(elm=>{
//     elm.addEventListener('click',function(e){
//         elm.parentElement.style.display = "none"
//     })
// })

// another way of doing the same
document.querySelector("#images").addEventListener("click",function(e){
    let opTargate = e.target.parentNode
    if(e.target.tagName === "IMG"){
        opTargate.remove()

    }
    e.preventDefault()
    // opTargate.style.display = "none"
    // or
},false);