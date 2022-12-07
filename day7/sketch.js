function setup() {
  createCanvas(720, 720)
}

function draw() {
  background(220)
  setCenter(width / 2, height / 2)
  stroke('green')

  // polarPolygons( number, number of edges, radius, distance, [callback] )

  fill(231, 46, 11, 120)
  polarPolygons(16, 4, 80, 230)
  fill(113, 155, 26, 120)
  polarPolygons(16, 4, 40, 170)
  fill(240, 170, 19, 120)
  polarPolygons(8, 4, 80, 100)
  fill(255, 255, 255, 120)
  polarPolygons(8, 4, 40, 50)
  fill(175, 170, 238, 120)
  polarHexagon(30, 50, 0)
}
