//TODO 1. Move Pac-man
//TODO 2. Add scoreboard
//TODO 3. Add Ghost
//1=coin, 2=brick, 3=empty
var world = [ 
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,2,1,1,1,1,1,2],
    [2,1,1,1,2,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
]

function showWorld() { 
    let output = ' ';

    for (let i=0; i<world.length; i++) {
        output += "\n<div class='row'>";
        for (let j=0; j<world[i].length; j++) {
            if (world[i][j] == 2 ) {
                output += "\n<div class='brick'></div>";
            }
            else if (world[i][j] == 1 ) {
                output += "\n<div class='coin'></div>";
            }
        }
        output += "\n</div>";
    }
    document.getElementById('world').innerHTML = output; 
}


window.onload = function() {
    showWorld();
}
