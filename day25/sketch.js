let img

function preload() {
  img = loadImage('flowers.jpg')
}

function setup() {
  createCanvas(720, 720)
  noSmooth()
  img.resize(width, height)
}

function draw() {
  img.loadPixels()
  for (let i = 0; i < 100; i++) {
    swapPixels()
  }
  img.updatePixels()

  image(img, 0, 0, width, height)
}

function averagePixels() {
  const xOne = random(img.width)
  const yOne = random(img.height)
  const colorOne = img.get(xOne, yOne)

  // Uncomment to choose points closer together
  // const xTwo = constrain(xOne + random(-20, 20), 0, img.width-1);
  // const yTwo = constrain(yOne + random(-20, 20), 0, img.height-1);
  const xTwo = random(img.width)
  const yTwo = random(img.height)
  const colorTwo = img.get(xTwo, yTwo)

  const averageColor = color(
    (red(colorOne) + red(colorTwo)) / 2,
    (green(colorOne) + green(colorTwo)) / 2,
    (blue(colorOne) + blue(colorTwo)) / 2
  )

  img.set(xOne, yOne, averageColor)
  img.set(xTwo, yTwo, averageColor)
}

function swapPixels() {
  const xOne = random(img.width)
  const yOne = random(img.height)
  const colorOne = img.get(xOne, yOne)

  // Uncomment to choose points closer together
  // const xTwo = constrain(xOne + random(-20, 20), 0, img.width-1);
  // const yTwo = constrain(yOne + random(-20, 20), 0, img.height-1);
  const xTwo = random(img.width)
  const yTwo = random(img.height)
  const colorTwo = img.get(xTwo, yTwo)

  img.set(xOne, yOne, colorTwo)
  img.set(xTwo, yTwo, colorOne)
}
