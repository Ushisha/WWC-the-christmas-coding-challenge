let diameter
let angle = 0

function setup() {
  createCanvas(720, 720)
  diameter = height - 10
  noStroke()
  fill(252, 3, 173)
}

function draw() {
  background(0)

  let d1 = 10 + (sin(angle) * diameter) / 2 + diameter / 2

  let d2 = 10 + (sin(angle + PI / 2) * diameter) / 2 + diameter / 2

  let d3 = 10 + (sin(angle + PI) * diameter) / 2 + diameter / 2

  ellipse(0, 0, d1, d1)
  ellipse(width / 2, height / 2, d2, d2)
  ellipse(width, height, d3, d3)

  angle += 0.03
}
