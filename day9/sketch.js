class Shapes {
  /* Constructor expects parameters for
  fill color, x and y coordinates that
  will be used to initialize class properties.
  */
  constructor(msg, cColor, x, y) {
    this.color = cColor
    this.x = x
    this.y = y
    this.speed = 0
    this.msg = msg
  }

  start(speed) {
    // method expects parameter!
    this.speed = speed
  }

  display() {
    // method!
    fill(this.color)
    textSize(32)
    text(this.msg, this.x, this.y)
  }

  move() {
    // method!
    this.y += this.speed
    // Wrap x around boundaries
    if (this.y < -20) {
      this.y = height
    } else if (this.y > height) {
      this.y = -20
    }
  }
} //end class Shapes

let shape1
let shape2
let shape3

function setup() {
  createCanvas(720, 720)
  /* Construct the 3 Shapes */
  //constructor expects cColor, x, y
  shape1 = new Shapes('X', 'silver', 100, 300)
  shape2 = new Shapes('O', 'gold', 600, 200)
  shape3 = new Shapes('Y', 'blue', 200, 100)

  console.log('shape2', shape2)
  console.log('shape3', shape3)

  //call start methods of Shapes instances
  //the start method expects a number for speed
  shape1.start(2.3)
  shape2.start(-4)
  shape3.start(random(-1, 1))
}

function draw() {
  background('beige')

  //display and move all 3 Shapess
  shape1.display()
  shape2.display()
  shape3.display()

  shape1.move()
  shape2.move()
  shape3.move()
}
