const assert = require('chai').assert;
const Snake = require('../lib/snake');
const World = require('../lib/world');

describe('Snake', function() {
  context('has default attributes', function() {
    var snake = new Snake();
    it('that should assign an x coordinate', function() {
      assert.equal(snake.segments[0].x, 250);
    });

    it('that should assign a y coordinate', function() {
      assert.equal(snake.segments[0].y, 250);
    });

    it('that should assign a height', function(){
      assert.equal(snake.segments[0].height, 10);
    });

    it('that should assign a width', function(){
      assert.equal(snake.segments[0].width, 10);
    });

    it('that should assign a direction',function(){
      assert.equal(snake.direction, 0);
    });
  });

  context('with all assigned attributes', function() {
      var xValue = 250;
      var yValue = 250;
      var heightValue = 10;
      var widthValue = 10;
      var options = {x: xValue, y: yValue, height: heightValue, width: widthValue};
      var snake = new Snake(options);

      it('assigns the xValue passed in as the snake x', function() {
        assert.equal(snake.segments[0].x, xValue);
      });

      it('assigns the yValue passed in as the snake y', function() {
        assert.equal(snake.segments[0].y, yValue);
      });

      it('assigns the heightValue passed in as the snake height', function() {
        assert.equal(snake.segments[0].height, heightValue);
      });

      it('assigns the widthValue passed in as the snake width', function() {
        assert.equal(snake.segments[0].width, widthValue);
      });
  });

  context('changing coordinates', function() {
    it('can move up', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveUp();
      assert.equal(world.snake.segments[0].y, 240);
    });

    it('can move up twice', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveUp();
      world.snake.moveUp();
      assert.equal(world.snake.segments[0].y, 230);
    });

    it('can move down', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveDown();
      assert.equal(world.snake.segments[0].y, 260);
    });

    it('can move down twice', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveDown();
      world.snake.moveDown();
      assert.equal(world.snake.segments[0].y, 270);
    });

    it('can move left', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveLeft();
      assert.equal(world.snake.segments[0].x, 240);
    });

    it('can move left twice', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveLeft();
      world.snake.moveLeft();
      assert.equal(world.snake.segments[0].x, 230);
    });

    it('can move right', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveRight();
      assert.equal(world.snake.segments[0].x, 260);
    });

    it('can move up right', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.moveRight();
      world.snake.moveRight();
      assert.equal(world.snake.segments[0].x, 270);
    });
  });

  context('moving', function() {
    it('should have a move function', function () {
      var snake = new Snake();
      assert.isFunction(snake.move);
    });

    it('should have an update function', function () {
      var snake = new Snake();
      assert.isFunction(snake.update);
    });
  });

  context('segments', function() {
    it('can be added', function() {
      var snake = new Snake();
      snake.addSegment();
      assert.equal(2, snake.segments.length);
    });

    it('should follow upon moving up', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveUp();
      assert.equal(250, world.snake.segments[0].x);
      assert.equal(240, world.snake.segments[0].y);
      assert.equal(250, world.snake.segments[1].x);
      assert.equal(250, world.snake.segments[1].y);
    });

    it('should follow upon moving up twice', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveUp();
      world.snake.moveUp();
      assert.equal(250, world.snake.segments[0].x);
      assert.equal(230, world.snake.segments[0].y);
      assert.equal(250, world.snake.segments[1].x);
      assert.equal(240, world.snake.segments[1].y);
    });

    it('should follow upon moving down', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveDown();
      assert.equal(250, world.snake.segments[0].x);
      assert.equal(260, world.snake.segments[0].y);
      assert.equal(250, world.snake.segments[1].x);
      assert.equal(250, world.snake.segments[1].y);
    });

    it('should follow upon moving down twice', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveDown();
      world.snake.moveDown();
      assert.equal(250, world.snake.segments[0].x);
      assert.equal(270, world.snake.segments[0].y);
      assert.equal(250, world.snake.segments[1].x);
      assert.equal(260, world.snake.segments[1].y);
    });

    it('should follow upon moving left', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveLeft();
      assert.equal(240, world.snake.segments[0].x);
      assert.equal(250, world.snake.segments[0].y);
      assert.equal(250, world.snake.segments[1].x);
      assert.equal(250, world.snake.segments[1].y);
    });

    it('should follow upon moving left twice', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveLeft();
      world.snake.moveLeft();
      assert.equal(230, world.snake.segments[0].x);
      assert.equal(250, world.snake.segments[0].y);
      assert.equal(240, world.snake.segments[1].x);
      assert.equal(250, world.snake.segments[1].y);
    });

    it('should follow upon moving right', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveRight();
      assert.equal(260, world.snake.segments[0].x);
      assert.equal(250, world.snake.segments[0].y);
      assert.equal(250, world.snake.segments[1].x);
      assert.equal(250, world.snake.segments[1].y);
    });

    it('should follow upon moving right', function(){
      var world = new World();
      var snake = new Snake();
      world.snake.addSegment();
      world.snake.moveRight();
      world.snake.moveRight();
      assert.equal(270, world.snake.segments[0].x);
      assert.equal(250, world.snake.segments[0].y);
      assert.equal(260, world.snake.segments[1].x);
      assert.equal(250, world.snake.segments[1].y);
    });
  });
});
