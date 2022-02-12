var playerCount = 0 
var thorimg
var narutoimg
var lightningimg
var rsimg
var background

function preload() {
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //game = new Game();
  //game.getState();
  //game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    //game.update(1);
  }

  if (gameState === 1) {
    //game.play();
  }

  if (gameState === 2) {
    //game.showLeaderboard();
    //game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
