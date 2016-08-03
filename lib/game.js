const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');
const Snake = require('./snake');
const World = require('./world');
const Apple = require('./apple');
const listenForEvents = require('./events');
const $ = require('jquery')


var world = new World(canvas.width, canvas.height);

document.addEventListener('keydown', function(e) {
  world.updateWorld(e.keyCode);
});

requestAnimationFrame(function gameLoop() {
  world.renderWorld(context, world);
  world.updateWorld();
  world.eatFood();
  requestAnimationFrame(gameLoop);
});

$('#buttons').on('click', function(){
  $('#screen').show();
  $('.start-screen').hide(1000);
});

// $('#medium').on('click', function(){
//   $('#screen').show();
//   $('.start-screen').hide(1000);
// });
//
// $('#hard').on('click', function(){
//   $('#screen').show();
//   $('.start-screen').hide(1000);
// });

// listenForEvents(world, document);
