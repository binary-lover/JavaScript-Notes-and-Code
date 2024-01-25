const cardTitle = document.querySelector(".card-title");
const image = document.querySelector(".card-img-top");
const username = document.querySelector("#username");
const submitBtn = document.querySelector("#subt");
let followers = document.createElement('span');
// let requestUrl = 'https://api.github.com/users/'


function displayCard(data){
    document.querySelector('.card').style.display = 'block';
    console.log(data.avatar_url);
    image.setAttribute('src',data.avatar_url);
    cardTitle.innerHTML = `<h5>Name: ${data.name}</h5>`;
    followers.innerHTML = `<h5>Followers: ${data.followers}</h5>`;
    document.querySelector(".card-title").appendChild(followers); 
}

submitBtn.addEventListener("click", function () {
    requestUrl = `https://api.github.com/users/${username.value}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET',requestUrl);
    
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4){
            const respons = this.responseText
            const data = JSON.parse(respons)
            console.log(data);

            displayCard(data)
        }
    }
    xhr.send();
});

