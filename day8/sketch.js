function setup() {
  createCanvas(720, 720)
  background(0)
}

function draw() {
  // draw two random chords each frame
  let r = random(255) // r is a random number between 0 - 255
  let g = random(255) // g is a random number betwen 100 - 200
  let b = random(255) // b is a random number between 0 - 100
  let a = random(200, 255) // a is a random number between 200 - 255

  stroke(r, g, b, 50)
  randomChord()
  randomChord()
  randomChord()
}

function randomChord() {
  // find a random point on a circle
  let angle1 = random(0, 2 * PI)
  let xpos1 = 160 + 200 + 200 * cos(angle1)
  let ypos1 = 160 + 200 + 200 * sin(angle1)

  // find another random point on the circle
  let angle2 = random(0, 2 * PI)
  let xpos2 = 160 + 200 + 200 * cos(angle2)
  let ypos2 = 160 + 200 + 200 * sin(angle2)
  // draw a line between them
  line(xpos1, ypos1, xpos2, ypos2)
}
