let snowflakes = [] // array to hold snowflake objects
let bg
let Text = 'Merry Christmas'
function setup() {
  bg = loadImage('assets/snowman2.jpg')
  createCanvas(720, 720)
  // fill(240)

  noStroke()
}

function draw() {
  background(bg)

  // update time
  let t = frameCount / 60

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(6); i++) {
    //create snowflakes
    snowflakes.push(new snowflake())
  }

  // loop through snowflakes
  for (let flake of snowflakes) {
    //update position
    flake.update(t)
    //display snowflake
    flake.display()
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0
  this.posY = random(-50, 0)
  this.initialangle = random(0, 2 * PI)
  this.size = random(2, 5)

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)))

  this.update = function (time) {
    // x position follows a circle
    let w = 0.6 // angular speed
    let angle = w * time + this.initialangle
    this.posX = width / 2 + this.radius * sin(angle)

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5)

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this)
      snowflakes.splice(index, 1)
    }
  }

  this.display = function () {
    ellipse(this.posX, this.posY, this.size)
  }
}
