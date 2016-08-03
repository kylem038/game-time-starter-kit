const Apple = require('./apple');

function Snake(world, x = 250, y = 250){
  this.world = world;
  this.x = x;
  this.y = y;
  this.height = 10;
  this.width = 10;
  this.direction = 0;
  this.tail = [];
  this.total = () => this.tail.length;
}


//
// // function snakeTail() = {
// //   x,
// //   y,
// //   tail:
// // { [
// //     { x,y,direction },
// //     { x,y,direction },
// //     { x,y,direction },
// //     { x,y,direction },
// //   ]
// // }

// function SimpleSnake(){
//   this.segments = []
// }

Snake.prototype.head = function () {
  return this.tail[0];
}

Snake.prototype.tail = function () {
  return this.tail.slice(1);
}

Snake.prototype.segmentFollowSnake = function () {
  this.tail[0].y = this.head().y;
  this.tail[0].x = this.head().x;
}

Snake.prototype.addSegment = function (x, y, direction) {
  this.tail.unshift({
    x: this.x,
    y: this.y,
    direction: this.direction
  });
};

Snake.prototype.updateTail = function() {
  let { direction, tail } = this;
  const thisSeg = tail[0];
  if (this.y - thisSeg.y > 10) {
    thisSeg.y = this.y + 10;
  }
  // tail.map(seg => {
  // if ( this.direciton === "up") {this.addSegment(last.x, last.y + this.segmentHeight)}
  //   // if should move up?
  //   //   move up
  //   // else
  //   //   don't move
  //   console.log(seg)
  // });
  // if (tail.length >= 1){
  //   this.segmentFollowSnake();
  // }
};

Snake.prototype.moveRight = function() {
  this.moveSegments(10,0);
    this.world.collisionRight();
      this.world.selfCollision();
};

Snake.prototype.moveLeft = function() {
  this.moveSegments(-10,0);
    this.world.collisionLeft();
      this.world.selfCollision();
};

Snake.prototype.moveUp = function() {
  this.moveSegments(0,-10);
  this.world.collisionTop();
    this.world.selfCollision();
};

Snake.prototype.moveDown = function() {
  this.moveSegments(0,10);
  this.world.collisionBottom();
  this.world.selfCollision();
};

Snake.prototype.move = function(direction){
  if (direction === 1) {this.moveUp();}
  if (direction === 2) {this.moveDown();}
  if (direction === 3) {this.moveLeft();}
  if (direction === 4) {this.moveRight();}
  this.direction = direction;
};

Snake.prototype.gameOver = function() {
  window.alert ('Game Over');
  window.location.reload();
};

Snake.prototype.update = function(keyCode){
  if (keyCode === 38) {this.move(1);}
  if (keyCode === 40) {this.move(2);}
  if (keyCode === 37) {this.move(3);}
  if (keyCode === 39) {this.move(4);}
  if (keyCode === undefined) {this.move(this.direction);}
};

Snake.prototype.render = function(context) {
  context.fillStyle = 'black';
  context.fillRect(this.x, this.y, this.width, this.height);
  for (var i=0; i < this.tail.length; i++){
    context.fillRect(this.tail[i].x, this.tail[i].y, 10, 10);
  }
}

module.exports = Snake;
// module.exports = SimpleSnake;


//var head = this.head();
//prevousX= head.x
//previousY = head.y
//head.x = head.x + 10;
//head.y = head.y + 0;
//for ( var i = 1; i < this.segements.length; i++) {
 // var current = this.segements[i];
 // var x = current.x;
 // var y =current.y;
 // {this.move(n);}{this.movesegments();}
//}
//var current = this.segments[i];
//var previous = this.segments[i-1]
