let gs
let img
//upload image
function preload() {
  img = loadImage('img1.jpg')
}
//set canvas size as image sise
function setup() {
  createCanvas(img.width, img.height)
  gs = new GridScrambler()
}

function draw() {
  image(img, 0, 0, img.width, img.height)
  gs.update()
  gs.show()
}
//switch case to change the number of rows and colums of the grid enter to save the image
function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      gs.addRow()
      break
    case DOWN_ARROW:
      gs.removeRow()
      break
    case RIGHT_ARROW:
      gs.addCol()
      break
    case LEFT_ARROW:
      gs.removeCol()
      break
    case ENTER:
      save(img, 'out', 'png')
      break
  }
}
//function to excute the grid scramble tool when mouse is pressed
function mousePressed() {
  gs.scramble()
}
//GrideScrambler class
class GridScrambler {
  constructor() {
    //set grid
    this.height = height / 4
    this.width = width / 3
    this.numRows = 3
    this.numCols = 3
    this.x = width / 2
    this.y = height / 2
  }

  update() {
    //set x,y to mouse movement
    this.x = mouseX
    this.y = mouseY

    if (keyIsPressed) {
      switch (key) {
        case 'd':
          this.width = min(this.width + 1, width)
          break
        case 'a':
          this.width = max(this.width - 1, 0)
          break
        case 'w':
          this.height = min(this.height + 1, height)
          break
        case 's':
          this.height = max(this.height - 1, 0)
          break
      }
    }
  }

  addRow() {
    this.numRows++
  }

  removeRow() {
    this.numRows--
  }

  addCol() {
    this.numCols++
  }

  removeCol() {
    this.numCols--
  }

  scramble() {
    //start from top left corner of the grid
    const top = this.y - this.height / 2
    const left = this.x - this.width / 2
    //each column how far to move each direction
    const deltaX = this.width / this.numCols
    //each row how far to move
    const deltaY = this.height / this.numRows
    let corners = []
    let shuffled
    //loop through to create corner array
    for (let i = 0; i < this.numRows; i++) {
      for (let j = 0; j < this.numCols; j++) {
        corners.push([left + j * deltaX, top + i * deltaY])
      }
    }
    //make a copy of suffled corner array
    shuffled = shuffle(corners)
    //loop through to rearrage shuffled image
    for (let i = 0; i < shuffled.length; i++) {
      //use copy() function createa a coly of the original image position
      let temp = createImage(deltaX, deltaY)
      temp.copy(
        img,
        corners[i][0],
        corners[i][1],
        deltaX,
        deltaY,
        0,
        0,
        deltaX,
        deltaY
      )
      //move shuffled image to the original box
      img.copy(
        shuffled[i][0],
        shuffled[i][1],
        deltaX,
        deltaY,
        corners[i][0],
        corners[i][1],
        deltaX,
        deltaY
      )
      //move temp image to the original image
      img.copy(
        temp,
        0,
        0,
        deltaX,
        deltaY,
        shuffled[i][0],
        shuffled[i][1],
        deltaX,
        deltaY
      )
    }
  }
  //function to show where the grid is
  show() {
    //call push() before changing global setting
    push()
    rectMode(CENTER)
    stroke(255)
    noFill()
    //draw rectangular border to the grid
    rect(this.x, this.y, this.width, this.height)
    const top = this.y - this.height / 2
    const left = this.x - this.width / 2
    //draw grid lines inside rectanglar
    //nested for loops to draw for rows and columns
    for (let i = 0; i < this.numRows; i++) {
      line(
        left,
        top + i * (this.height / this.numRows),
        left + this.width,
        top + i * (this.height / this.numRows)
      )
    }
    for (let i = 0; i < this.numCols; i++) {
      line(
        left + i * (this.width / this.numCols),
        top,
        left + i * (this.width / this.numCols),
        top + this.height
      )
    }
    //setting goes back
    pop()
  }
}
