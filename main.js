// Information to reach API
const apiKey = '4baa164faa374628879eed8d958fd831';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json'
  xhr.onreadystatechange = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
      renderResponse(xhr.response)
    }
    
  }
    xhr.open('POST',url);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('apikey', apiKey);
    xhr.send(data);
}


// Clear page and call AJAX functions

const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);



//COVID 19
/*var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    document.write(this.responseText);
  }
});

xhr.open("GET", "https://covid-193.p.rapidapi.com/statistics?country=Bangladesh");
xhr.setRequestHeader("x-rapidapi-host", "covid-193.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5a2f9baf95msh062ac58bb670377p174cacjsn4cf04f09e2b4");

xhr.send(data);
*/

