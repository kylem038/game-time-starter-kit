const Snake = require('./snake');
const Apple = require('./apple');


function World(width = 500, height = 500) {
  this.width = width;
  this.height = height;
  this.snake = new Snake(this);
  this.apple = new Apple(this);
}

World.prototype.renderWorld = function(context) {
  var snake = this.snake;
  var apple = this.apple;
  context.clearRect(0,0,this.width,this.height);
  snake.render(context);
  apple.render(context);
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
  }
};

World.prototype.selfCollision = function() {
  var head = this.snake.segments[0];
  var x = head.x;
  var y = head.y;
  for (var i = 2; i < this.snake.segments.length; i++) {
    // if (this.snake.segments[i].x === x && this.snake.segments[i].y === y)
    {
      if (this.snake.segments[0].x < this.snake.segments[i].x + this.snake.segments[i].width &&
        this.snake.segments[0].x + this.snake.segments[0].width > this.snake.segments[i].x &&
        this.snake.segments[0].y < this.snake.segments[i].y + this.snake.segments[i].height &&
        this.snake.segments[0].height + this.snake.segments[0].y > this.snake.segments[i].y)
      console.log('game over');
    }
  }
};

module.exports = World;
