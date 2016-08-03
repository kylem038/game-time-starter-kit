const assert = require('chai').assert;
const World = require('../lib/world');
const Snake = require('../lib/snake');

describe('world', function () {
    it('should start with a default width', function() {
      var world = new World();
      assert.equal(world.width, 500);
    });

    it('should start with a default height', function() {
      var world = new World();
      assert.equal(world.height, 500);
    });

    it('should be a function', function () {
      assert.isFunction(World);
    });

    it('should have an render function', function () {
      var world = new World();
      assert.isFunction(world.renderWorld);
    });

    it('should have an eatFood function', function () {
      var world = new World();
      assert.isFunction(world.eatFood);
    });

    it('should have an update function', function () {
      var world = new World();
      assert.isFunction(world.updateWorld);
    });

    it('should instantiate an object', function () {
      var world = new World();
      assert.isObject(world);
    });

  context('has collisions', function() {
    // it('between the snake & the top boundary', function() {
    //   var world = new World();
    //   var snake = new Snake(world, -100, -100, 10, 10);
    //   assert.equal(snake.world.collisionTop());
    // });

    it('should have a gameOver function', function () {
      var world = new World();
      assert.isFunction(world.gameOver);
    });
  });
});
