const result = document.querySelector("#result");
const search = new URLSearchParams(window.location.search);
const score = search.get("score"); 
result.textContent = "Bro, il tuo score è: "+score+"/39"
console.log(score);