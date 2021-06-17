var GOAT = window.prompt("Who's your greatest player of all time?");

while(GOAT.toLowerCase() != "messi" && GOAT.toLowerCase() != "ronaldo" && GOAT.toLowerCase() != "kaka") {
  window.alert("WRONG ENTRY! no such player, please try again...");
  var GOAT = window.prompt("Who's your greatest player of all time?");
}

if(GOAT.toLowerCase() == "messi") {
  alert("MESSI!! you're deffinitely right");
  document.write(`<div class="messi">
        <h2>Lionel Messi</h2>
        <img src="https://specials-images.forbesimg.com/imageserve/5f15af31465263000625ce08/960x0.jpg?fit=scale" alt="">
      </div>`)
} else if(GOAT.toLowerCase() == "ronaldo") {
  alert("Good Choice!");
  document.write(`<div class="ronaldo">
        <h2>C. Ronaldo</h2>
        <img src="https://sport360.com/wp-content/uploads/2017/12/CR7winner.jpg" alt="">
      </div>`)
} else if(GOAT.toLowerCase() == "kaka"){
  alert("KAKA! what a player");
  document.write(`<div class="kaka">
        <h2>Kaka</h2>
        <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/12/17/15135288171302.jpg" alt="">
      </div>`)
}

var Rate = window.prompt("on a scale from 1-5, how would you rate "+ GOAT.toLowerCase() + "?");

while(Rate < 1 || Rate > 5) {
  window.alert("please stick to rate from 1 to 5");
  var Rate = window.prompt("on a scale from 1-10, how would you rate "+ GOAT.toLowerCase() + "?");
}

for(var i = 0;i<Rate;i++) {
  document.write(`<i class="fas fa-star"></i>
`)
}


