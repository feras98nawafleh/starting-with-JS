var GOAT = window.prompt("Who's your greatest player of all time? you can answer with name or shirt number");
if(GOAT == "messi" || GOAT == 10) {
  alert("MESSI!! you're deffinitely right");
  document.write(`<div class="messi">
        <h2>Leonel Messi</h2>
        <img src="https://specials-images.forbesimg.com/imageserve/5f15af31465263000625ce08/960x0.jpg?fit=scale" alt="">
      </div>`)
} else if(GOAT == "ronaldo" || GOAT == 7) {
  alert("Good Choice!");
  document.write(`<div class="ronaldo">
        <h2>C. Ronaldo</h2>
        <img src="https://sport360.com/wp-content/uploads/2017/12/CR7winner.jpg" alt="">
      </div>`)
} else if(GOAT == "kaka" || GOAT == 8){
  alert("KAKA! what a player");
  document.write(`<div class="kaka">
        <h2>Kaka</h2>
        <img src="https://preview.redd.it/ej5fepfa8z101.jpg?width=640&crop=smart&auto=webp&s=7dc88d3a668d1a9666964f7bbfbb53713330c14b" alt="">
      </div>`)
} else {
  alert("Wrong entry!");
  document.write(`<div>
  <h2>NO SUCH OPTION</h2>
      </div>`)
}


