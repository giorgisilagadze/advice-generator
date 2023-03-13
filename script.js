const apiUrl = "https://api.adviceslip.com/advice";
const advice = document.getElementById("advice");
const adviceNumber = document.getElementById("advice-number");

function getapi() {
    
    fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    advice.innerHTML = data.slip.advice;
    adviceNumber.innerHTML = data.slip.id;
  })
  
}



