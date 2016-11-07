// console.log('Sim Sim Salabim');

// === requestAnimationFrame ===
var animate =   window.requestAnimationFrame ||
                window.webkitrequestAnimationFrame ||
                window.mozrequestAnimationFrame ||
                function(callback) {
                  window.setTimeout(callback, 1000/60)
                };
// creates 60fps and method optimizes browser performance

// === Game canvas ===
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

// === Game setup ===
var setup = function() {
  update();
  render();
  animate(setup);
};

var update = function() {};

var render = function() {
  context.fillStyle = "#0075c9";
  context.fillRect(0, 0, width, height);
};

// === Game pieces ===
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
  this.paddle = new Paddle(690, 175, 10, 50);
};

function Computer() {
  this.paddle = new Paddle(0, 175, 10, 50);
};

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
  this.xSpeed = 3;
  this.ySpeed = 0;
  this.radius = 5;
};

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = '#000000';
  context.fill();
};

// === Game lineup ===
var player = new Player();
var computer = new Computer();
var ball = new Ball(350, 200);

var render = function() {
  context.fillStyle = "#0075c9";
  context.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  ball.render();
};

// === Game collision logic ===
var update = function() {
  ball.update();
};

Ball.prototype.update = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

var update = function () {
  ball.update(player.paddle, computer.paddle);
};

Ball.prototype.update = function(paddle1, paddle2) {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
  var leftX = this.x - 5;
  var leftY = this.y - 5;
  var rightX = this.x + 5;
  var rightY = this. y + 5;

  // HITTING TOP WALL
  if (this.y - 5 < 0) {
    this.y = 5;
    this.ySpeed = -this.ySpeed;
  // HITTING BOTTOM WALL
  } else if (this.y + 5 > 400) {
    this.y = 395;
    this.ySpeed = -this.ySpeed;
  };

  // POINT SCORED
  if (this.x < 0 || this.x > 700) {
    this.xSpeed = 3;
    this.ySpeed = 0;
    this.x = 350;
    this.y = 200;
  };

  // console.log(paddle1)
  // console.log(paddle2)

  // HIT PLAYER PADDLE
  if (leftX > 350) {
    if (leftX < (paddle1.x + paddle1.width) && rightX > paddle1.x && leftY < (paddle1.y + paddle1.height) && rightY > paddle1.y) {
      this.xSpeed = -3;
      this.ySpeed += (paddle1.ySpeed / 2);
      this.x += this.xSpeed;
    };
  } else {
  // HIT COMPUTER PADDLE
    if (leftX < (paddle2.x + paddle2.width) && rightX > paddle2.x && leftY < (paddle2.y + paddle2.height) && rightY > paddle2.y) {
      this.xSpeed = 3;
      this.ySpeed += (paddle2.ySpeed / 2);
      this.x += this.xSpeed;
    };
  };
};

// === Match logic ===
var controlKeys = {};

window.addEventListener('keyDown', function(event) {
  controlKeys[event.keyCode] = true;
});

window.addEventListener('keyUp', function(event) {
  delete controlKeys[event.keyCode]
});

var update = function {
  player.update();
  ball.update(player.paddle, computer.paddle);
};

Player.prototype.update = function() {
  for (var key in controlKeys) {
    var value = Number(key);

    // UP ARROW
    if (value == 38) {
      this.paddle.move(0, -4);
    // DOWN ARROW
    } else if (value == 40) {
      this.paddle.move(4, 0);
    } else {
      this.paddle.move(0, 0);
    };
  };
};
