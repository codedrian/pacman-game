//TODO 1. Move Pac-man
//TODO 2. Add scoreboard
//TODO 3. Add Ghost
//42:31
//1=coin, 2=brick, 3=empty
let world = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

let pacman = {
  x: 1,
  y: 1
};
let score = 0;

function showWorld() {
  //function to show World
  let output = "";
  for (let i = 0; i < world.length; i++) {
    output += "<div class='row'>";
    for (let j = 0; j < world[i].length; j++) {
      if (world[i][j] == 2) 
      output += "<div class='brick'></div>";
      else if (world[i][j] == 1) 
      output += "<div class='coin'></div>";

      if (world[i][j] == 0) output += "<div class='empty'></div>";
    }
    output += "</div>";
  }
  console.log(output);
  document.getElementById("world").innerHTML = output;
}

function showScore() {
  document.getElementById("score-board").innerHTML = score;
}

function showPacman() {
  //function to show Pacman
  document.getElementById("pacman").style.left = pacman.x * 20 + "px";
  document.getElementById("pacman").style.top = pacman.y * 20 + "px";
}



showWorld();
showPacman();
showScore();

document.onkeydown = function (e) {
  console.log(e);
  console.log(e.keyCode); //TODO figure out why it is depricated

  

  if (e.keyCode == 39) {
    pacman.x++;
  } else if (e.keyCode == 40) {
    pacman.y++;
  } else if (e.keyCode == 37) {
    pacman.x--;
  } else if (e.keyCode == 38) {
    pacman.y--;
  }
  if (world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
    score = score+1;
    showWorld();  
    showScore();
  }
  
  showPacman();
 
};








