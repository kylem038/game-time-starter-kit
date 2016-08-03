const Snake = require('./snake');
const Apple = require('./apple');


function World(width = 500, height = 500) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(this);
  this.apple = new Apple(this);
}

var lastRun = Date.now();

World.prototype.renderWorld = function(context) {
  var now = Date.now();
  if (now - lastRun > 100) {
    var snake = this.snake;
    var apple = this.apple;
    context.clearRect(0,0,this.width,this.height);
    snake.render(context);
    snake.tick();
    apple.render(context);
    lastRun = now;
  }
};

World.prototype.updateWorld = function(keyCode){
  this.snake.update(keyCode);
//call checkCollision here
};

World.prototype.eatFood = function(){
  if (this.snake.x < this.apple.x + this.apple.width &&
    this.snake.x + this.snake.width > this.apple.x &&
    this.snake.y < this.apple.y + this.apple.height &&
    this.snake.height + this.snake.y > this.apple.y){
    this.apple = new Apple();
    this.snake.addSegment(this.snake.x, this.snake.y, this.snake.direction);
    console.log(this.snake.tail);
    // for (var i = 0; i <= this.snake.tail.length-1; i++){
    //   this.snake.tail[i] = this.snake.tail[i+1];
    //  }
    // this.snake.total ++;
    //  var newSnake = new Snake(this, this.snake.x, this.snake.y);
    //  newSnake.direction = this.snake.direction;

    //  newSnake.tail = this.snake.tail.unshift(this.snake.tail.length + 1);

    // this.snake.tail.unshift(this.snake.tail.length + 1);
    //      console.log (this.snake.tail);


    //  this.snake = newSnake;
    //  this.snake.tail[this.snake.total-1] = new Snake(this, this.x, this.y);
  }
};

World.prototype.collisionTop = function() {
  if (this.snake.y <= 2) {
    this.gameOver();
    return true;
  }
  else {
    return false;
  }
};

World.prototype.gameOver = function() {
  window.alert ('Game Over');
  window.location.reload();
};

module.exports = World;
