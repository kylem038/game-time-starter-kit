const assert = require('chai').assert;
const $ = require('jquery');

const snake = require('../lib/snake');


describe('player inputs', function() {

  //Assert that keydown on up button moves snake up
  context('when up key is pressed', function() {
    it('should change snakes direction to move up', function() {
      // setup
      $(document).trigger('keydown', { keyCode: 38 });
      assert.equal(snake.y, 249);
    });
  });

  //Assert that keydown on down button moves snake down
  //Assert that keydown on left button moves snake left
  //Assert that keydown on right button moves snake right

});