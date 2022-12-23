const Y_AXIS = 1
const X_AXIS = 2
let b1, b2, c1, c2

function setup() {
  createCanvas(720, 720)
  // Define colors
  b1 = color(233, 250, 0)
  b2 = color(147, 1, 244)
  c1 = color(204, 102, 0)
  c2 = color(0, 102, 153)
}

// the parameter at which x and y depends is usually taken as either t or symbol of theta
let t = 0
function draw() {
  // background('#fff')
  // Background
  setGradient(0, 0, width, height, b1, b2, X_AXIS)

  translate(width / 2, height / 2)
  stroke('#0f0f0f')
  strokeWeight(2)
  //loop for adding 100 lines
  for (let i = 0; i < 100; i++) {
    line(x1(t + i), y1(t + i), x2(t + i) + 20, y2(t + i) + 20)
  }
  t += 0.3
}
// function to change initial x co-ordinate of the line
function x1(t) {
  return sin(t / 10) * 125 + sin(t / 20) * 125 + sin(t / 30) * 125
}

// function to change initial y co-ordinate of the line
function y1(t) {
  return cos(t / 10) * 125 + cos(t / 20) * 125 + cos(t / 30) * 125
}

// function to change final x co-ordinate of the line
function x2(t) {
  return sin(t / 15) * 125 + sin(t / 25) * 125 + sin(t / 35) * 125
}

// function to change final y co-ordinate of the line
function y2(t) {
  return cos(t / 15) * 125 + cos(t / 25) * 125 + cos(t / 35) * 125
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill()

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1)
      let c = lerpColor(c1, c2, inter)
      stroke(c)
      line(x, i, x + w, i)
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1)
      let c = lerpColor(c1, c2, inter)
      stroke(c)
      line(i, y, i, y + h)
    }
  }
}
