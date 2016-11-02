// console.log('Sim Sim Salabim');

// requestAnimationFrame
var animate =   window.requestAnimationFrame ||
                window.webkitrequestAnimationFrame ||
                window.mozrequestAnimationFrame ||
                function(callback) {
                  window.setTimeout(callback, 1000/60)
                };
// creates 60fps and method optimizes browser performance

// Game canvas
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

// Game setup
var setup = function() {
  update();
  render();
  animate(setup);
}
