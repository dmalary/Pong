// console.log('Sim Sim Salabim');

// requestAnimationFrame =======================================================
var animate =   window.requestAnimationFrame ||
                window.webkitrequestAnimationFrame ||
                window.mozrequestAnimationFrame ||
                function(callback) {
                  window.setTimeout(callback, 1000/60)
                };
// creates 60fps and method optimizes browser performance

// Game canvas =================================================================
var canvas = document.createElement('canvas');
var width = 700;
var height = 400;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

window.onload = function() {
  document.body.appendChild(canvas);
  animate(setup)
};

// Game setup ==================================================================
var setup = function() {
  update();
  render();
  animate(setup);
}

var update = function() {};

var render = function() {
  context.fillStyle = "#0075c9";
  context.fillRect(0, 0, width, height);
};

// Game pieces =================================================================
function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.xSpeed = 0;
  this.ySpeed = 0;
};

Paddle.prototype.render = function() {
  context.fillStyle = "#999999";
  context.fillRect(this.x, this.y, this.width, this.height);
};

// EDIT COORDINATES (o)
function Player() {
  this.paddle = new Paddle(690, 150, 10, 50);
};

function Computer() {
  this.paddle = new Paddle(0, 150, 10, 50);
}

// RENDER SCORES FROM HERE?
Player.prototype.render = function() {
   this.paddle.render();
 };

Computer.prototype.render = function () {
  this.paddle.render();
};

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.xSpeed = 0;
  this.ySpeed = 3;
  this.radius = 5;
};

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = '#000000';
  context.fill();
};

// Game lineup =================================================================
var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

var render = function() {
  context.fillStyle = "#0075c9";
  context.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  ball.render();
}
