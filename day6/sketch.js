function setup() {
  createCanvas(720, 720)
}

function draw() {
  background(0)
  setCenter(width / 2, height / 2)

  // polarLines( number, radius, distance, [callback] )
  noFill()
  stroke('#ccc')
  strokeWeight(1)
  polarLines(12, 140, 50)
  polarLines(12, 60, 50)

  // polarEllipses( number, widthRadius, heightRadius, distance, [callback] )
  noStroke()
  fill(188, 221, 199, 110)
  polarEllipses(8, 50, 50, 50)
  fill(239, 196, 121, 120)
  polarEllipses(3, 36, 36, 32)
  fill(247, 215, 217, 150)
  polarEllipses(10, 50, 50, 100)
  polarEllipses(10, 30, 30, 120)
  fill(238, 175, 170)
  polarEllipses(12, 8, 8, 40)
  fill(239, 196, 121, 120)
  polarEllipses(5, 16, 16, 32)
  fill(188, 221, 199, 110)
  polarEllipses(14, 50, 50, 155)

  // polarHexagon( angle, radius, [distance] )
  noStroke()
  fill(175, 170, 238)
  polarHexagon(3, 10, 0)

  fill(9, 133, 222)
  //polarTriangles(number, radius, distance, [callback])
  polarTriangles(8, 6, 50)
  polarTriangles(4, 8, 140)
  // polarSquares( number, radius, distance, [callback] )
  polarSquares(8, 2, 80)
  polarSquares(4, 4, 120)
}
