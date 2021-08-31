var name, grad, digits, rows, ques, time;
var form, game,playerCount=0,player
var gameState = 0
var database
var totalPlrs
function setup() {
  createCanvas(800, 400);
  database= firebase.database()
  game = new Game()
  game.getState()
  game.start()
}

function draw() {
  background(255, 255, 255);
}