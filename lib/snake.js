const Apple = require('./apple');

function Snake(world, x = 250, y = 250, width = 10, height = 10){
  this.world = world;
  // this.height = 10;
  // this.width = 10;
  this.direction = 0;
  this.segments = [];
  this.segmentWidth = width;
  this.segmentHeight = height;
  this.addSegment(x, y);
}

Snake.prototype.head = function () {
  return this.segments[0];
};

Snake.prototype.tail = function () {
  return this.segments.slice(1);
};

Snake.prototype.last = function() {
  return this.segments[this.segments.length-1];
};

Snake.prototype.addSegment = function (x, y) {
  this.segments.push({x: x, y: y, width: this.segmentWidth, height: this.segmentHeight});
};

Snake.prototype.moveRight = function() {
  this.moveSegments(10,0);
};

Snake.prototype.moveLeft = function() {
  this.moveSegments(-10,0);
};

Snake.prototype.moveUp = function() {
  this.moveSegments(0,-10);
};

Snake.prototype.moveDown = function() {
  this.moveSegments(0,10);
};

Snake.prototype.grow = function () {
  var last = this.last();

  if(this.direction === 1) { this.addSegment(last.x, last.y - this.segmentHeight); }

  if(this.direction === 2) { this.addSegment(last.x, last.y + this.segmentHeight); }

  if(this.direction === 3) { this.addSegment(last.x, last.x + this.segmentWidth); }

  if(this.direction === 4) { this.addSegment(last.x, last.x - this.segmentWidth); }
};

Snake.prototype.move = function(direction){
  if (direction === 1) {this.moveUp();}
  if (direction === 2) {this.moveDown();}
  if (direction === 3) {this.moveLeft();}
  if (direction === 4) {this.moveRight();}
  this.direction = direction;
};

Snake.prototype.moveSegments = function (offsetX, offsetY) {
  var head = this.head();
  var previousX = head.x;
  var previousY = head.y;

  head.x = head.x + offsetX;
  head.y = head.y + offsetY;

  for (var i = 1; i < this.segments.length; i++) {
    var current = this.segments[i];

    var x = current.x;
    var y = current.y;

    current.x = previousX;
    current.y = previousY;
    previousX = x;
    previousY = y;
  }
};

Snake.prototype.update = function(keyCode){
  if (keyCode === 38) { this.direction = 1;}
  if (keyCode === 40) { this.direction = 2;}
  if (keyCode === 37) { this.direction = 3;}
  if (keyCode === 39) { this.direction = 4;}
};

Snake.prototype.tick = function () {
  this.move(this.direction);
};

Snake.prototype.render = function(context) {
  context.fillStyle = 'black';
  this.segments.forEach(function(segment){
    context.fillRect(segment.x, segment.y, segment.width, segment.height);
  });
};

module.exports = Snake;
