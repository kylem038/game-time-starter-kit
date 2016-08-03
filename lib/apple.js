function Apple(){
  this.x = Math.floor(Math.random() * (490));
  this.y = Math.floor(Math.random() * (490));
  this.height = 10;
  this.width = 10;
}

Apple.prototype.render = function(context) {
  context.fillStyle = "red";
  context.fillRect(this.x, this.y, this.width, this.height);
};

module.exports = Apple;
