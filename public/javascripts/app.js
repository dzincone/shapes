var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var shapes = document.getElementsByClassName("shapes")[0];
var clearAll = document.getElementsByClassName("clear-all")[0];
var randomColor = document.getElementsByClassName("random-color")[0];
var randomObjects = document.getElementsByClassName("random-objects")[0];
var shapesArray = [];
var circlesArray = [];
var squaresArray = [];

function Shape(color, x, y) {
  this.color = color;
  this.x = x;
  this.y = y;
}

function Square(color, x, y, width, height) {
  Shape.call(this, color, x, y);
  this.width = width;
  this.height = height;
  this.type = "square";

}

Square.prototype.draw = function(e) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}



function Circle(color, x, y, radius) {
  Shape.call(this, color, x, y);
  this.radius = radius;
  this.type = "circle";
}

Circle.prototype.draw = function(e) {

  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();
}


// var drawSquare = function(e) {
//
//   x = e.offsetX;
//   y = e.offsetY;
//   ctx.fillStyle = "green";
//   ctx.fillRect(x, y, 100, 100);
// }

// drawCircle = function (e) {
//       var radius = 30;
//       x = e.offsetX;
//       y = e.offsetY;
//
//       ctx.beginPath();
//       ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
//       ctx.fillStyle = 'green';
//       ctx.fill();
// }

// if (shapes.value === "circle") {
//   var row = document.getElementsByClassName("row")[0];
//   var radius = document.createElement("div");
//   radius.className = "radius";
//   row.appendChild(radius);
//   var radiusNew = document.getElementsByClassName("radius")[0];
//   var newLabel = document.createElement("label");
//   newLabel.innerHTML = "Radius";
//   radiusNew.appendChild(newlabel);
//
// }


canvas.addEventListener("mousedown", function(e) {


 if(shapes.value === "circle") {
   x = e.offsetX;
   y = e.offsetY;
   var radius = document.getElementById("radius").value;
   var color = document.getElementsByClassName("color")[1].value;
   var circle = new Circle("#" + color, x, y, radius);
   if(radius != "") {
     circle.draw(e);
     circlesArray.push(circle);
     shapesArray.push(circle);
   }
   console.log(circlesArray);
   console.log(shapesArray);
 } else if (shapes.value === "square"){
   x = e.offsetX;
   y = e.offsetY;
   var height = document.getElementById("height").value;
   var width = document.getElementById("width").value;
   var color = document.getElementsByClassName("color")[1].value;
   var square = new Square("#" + color, x, y, width, height);
   if(height != "" && width != ""){
     square.draw(e);
     squaresArray.push(square);
     shapesArray.push(square);
   }
   console.log(squaresArray);
   console.log(shapesArray);

 }
});

clearAll.addEventListener("click", function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  shapesArray = [];
  circlesArray = [];
  squaresArray = [];
});

randomColor.addEventListener("click", function(e){
  for(var i = 0; i < shapesArray.length; i++){
    if(shapesArray[i].type === "circle") {
      x = shapesArray[i].x;
      y = shapesArray[i].y;
      radius = shapesArray[i].radius;
      color = '#'+Math.floor(Math.random()*16777215).toString(16);
      var circle = new Circle(color, x, y, radius);
      circle.draw(e);
    } else {
      x = shapesArray[i].x;
      y = shapesArray[i].y;
      width = shapesArray[i].width;
      height = shapesArray[i].height;
      color = '#'+Math.floor(Math.random()*16777215).toString(16);
      var square = new Square(color, x, y, width, height);
      square.draw(e);
    }

  }
})

randomObjects.addEventListener("click", function(e) {
  var objectDecider = Math.floor((Math.random() * 2) + 1);

  // var circle = new Circle(color, x, y, radius);
  // var square = new Square(color, x, y, width, height);
  var number = Math.floor(Math.random()*50);
  for (var i = 0; i < number; i++){
  var objectDecider = Math.floor((Math.random() * 2) + 1);
  objectDecider;
  if(objectDecider === 1) {
    var x = Math.floor(Math.random() * 400);
    var y = Math.floor(Math.random() * 300);
    var color = color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var radius = Math.floor(Math.random() * 60);
    var circle = new Circle(color, x, y, radius);
    circle.draw(e);
    circlesArray.push(circle);
    shapesArray.push(circle);

  } else {
    var x = Math.floor(Math.random() * 400);
    var y = Math.floor(Math.random() * 300);
    var color = color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var width = Math.floor(Math.random() * 60);
    var height = Math.floor(Math.random() * 60);
    var square = new Square(color, x, y, width, height);
    square.draw(e);
    squaresArray.push(square);
    shapesArray.push(square);
  }
    }

})
