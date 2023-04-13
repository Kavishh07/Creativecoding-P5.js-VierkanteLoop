

// 1E ART

function setup(){
  createCanvas(800,800, WEBGL)
  angleMode(DEGREES)
}

function draw(){
// fill(255);
// ellipse(80,80,80,80);

  background(20)
  rotateX(55)
  noFill()
  stroke(255)

  for (var i = 0; i < 100; i++){
    var r = map(sin(frameCount / 2), -1, 1, 100, 200)
    var g = map( i, 0, 50, 100, 200)
    var b = map(cos(frameCount), -1, 1, 200, 100)

    stroke(r, g, b)
    
    rotate(frameCount / 50)

    beginShape()
    for(var j = 0; j < 360; j += 65) {
       var rad = i * 3
       var x = rad * cos(j)
       var y = rad * sin(j)
       var z = sin(frameCount * 3 + i * 4) * 80

       vertex(x, y, z)
    }
    endShape(CLOSE)
}
}





// 2E ART
// var r1
// var r2 

// var a1 = 0
// var a2 = 0

// var a1Inc
// var a2Inc

// var prevX
// var prevY


// function setup(){
//   createCanvas(800,800)
//   angleMode(DEGREES)
//   background(10)

//   r1 = random(300, 150)
//   r2 = random(300, 150)

//   a1Inc = random(0.2, 7)
//   a2Inc = random(0.2, 7)
// }

// function draw(){
//   translate(width / 2, height / 2)
//   stroke(255)

//   for (var i = 0; i < 100; i++){ 
//   var x1 = r1 * cos(a1)
//   var y1 = r1 * sin(a1)

//   var x2 = x1 + r2 * cos(a2)
//   var y2 = y1 + r2 * sin(a2)

//     var r = map(sin(frameCount), -1, 1, 100, 200)
//     var g = map(cos(frameCount), -1, 1, 100, 200)
//     var b = map(sin(frameCount), -1, 1, 200, 100)

//   stroke(r, g, b)

//   line(prevX, prevY, x2, y2)

//   prevX = x2
//   prevY = y2

//   a1 += a1Inc
//   a2 += a2Inc
// }
// }