const Snake = require('./snake');
const Apple = require('./apple');
const $ = require('jquery');


function World(width = 500, height = 500) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(this);
  this.apple = new Apple(this);
}

var lastRun = Date.now();

var difficulty;
$('#easy').on('click', function(){
  difficulty = 60;
});
$('#medium').on('click', function(){
  difficulty = 30;
});
$('#hard').on('click', function(){
  difficulty = 10;
});

World.prototype.renderWorld = function(context) {
  var now = Date.now();
  if (now - lastRun > difficulty) {
    var snake = this.snake;
    var apple = this.apple;
    context.clearRect(0,0,this.width,this.height);
    snake.tick();
    snake.render(context);
    apple.render(context);
    lastRun = now;
  }
};

World.prototype.updateWorld = function(keyCode){
  this.snake.update(keyCode);
};

World.prototype.eatFood = function(){
  if (this.snake.segments[0].x < this.apple.x + this.apple.width &&
    this.snake.segments[0].x + this.snake.segments[0].width > this.apple.x &&
    this.snake.segments[0].y < this.apple.y + this.apple.height &&
    this.snake.segments[0].height + this.snake.segments[0].y > this.apple.y){
    this.apple = new Apple();
    this.snake.addSegment(this.snake.segments[0].x, this.snake.segments[0].y, this.snake.segments[0].direction);
  }
};

World.prototype.collisionTop = function() {
  if (this.snake.segments[0].y < 0) {
    this.gameOver();
    return true;
  }
  else {
    return false;
  }
};

World.prototype.collisionBottom = function() {
  if (this.snake.segments[0].y > 490) {
    this.gameOver();
    return true;
  }
  else {
    return false;
  }
};

World.prototype.collisionLeft = function() {
  if (this.snake.segments[0].x < 0) {
    this.gameOver();
    return true;
  }
  else {
    return false;
  }
};

World.prototype.collisionRight = function() {
  if (this.snake.segments[0].x > 490) {
    this.gameOver();
    return true;
  }
  else {
    return false;
  }
};

World.prototype.selfCollision = function() {
  var head = this.snake.segments[0];
  var x = head.x;
  var y = head.y;
  for (var i = 2; i < this.snake.segments.length; i++) {
    {
      if (this.snake.segments[0].x < this.snake.segments[i].x + this.snake.segments[i].width &&
        this.snake.segments[0].x + this.snake.segments[0].width > this.snake.segments[i].x &&
        this.snake.segments[0].y < this.snake.segments[i].y + this.snake.segments[i].height &&
        this.snake.segments[0].height + this.snake.segments[0].y > this.snake.segments[i].y)
      this.gameOver();
    }
  }
};

World.prototype.gameOver = function() {
  $('#gameOver').show();
  $('#screen').hide();
  $('p').hide();
  $('#reset').on('click', function(){
      window.location.reload();
  });
};

module.exports = World;
