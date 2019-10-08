let r = 200 //red
let g = 0 //green
let b = 0 // blue
let mic //microphone
var inc = 1.50 //RGB increase speed
var currentColour = "r"

function setup() {
  createCanvas(400, 400); 
  mic = new p5.AudioIn() //Audio Input
  mic.start()
}

function draw() {
  let micLevel = mic.getLevel() // To make life easier
  background(0); // Background colour is black
  fill(255) // White circles to make the outer eye layer 
  circle(250 + micLevel * 140, 100, 70 + micLevel * 200)
  circle(150 + micLevel * -140, 100, 70 + micLevel * 200)
  fill(r, g, b) // Colour changing Iris
  rect(0, 500, 80, -150 - micLevel * 750)
  rect(80, 500, 80, -150 - micLevel * 500)
  rect(160, 500, 80, -150 - micLevel * 250)
  rect(240, 500, 80, -150 - micLevel * 500)
  rect(320, 500, 80, -150 - micLevel * 750)
  circle(250 + micLevel * 140, 100, 40 + micLevel * 200)
  circle(150 + micLevel * -140, 100, 40 + micLevel * 200)
  fill(0) // Black pupils
  circle(250 + micLevel * 140, 100, 15 + micLevel * 200)
  circle(150 + micLevel * -140, 100, 15 + micLevel * 200)
  switch (currentColour) {
    case "r": // Red colour
      if (r <= 255) {
        r += inc; // Red increase
      } else {
        currentColour = "g";
      }
      break;
    case "g": // Green colour
      if (g <= 255) {
        g += inc; // Green increase
        r -= inc // Red decrease
      } else {
        currentColour = "b"; 
      }
      break;
    case "b": // Blue colour
      if (b <= 255) {
        b += inc; // Blue increase
        g -= inc // Green decrease
      } else {
        currentColour = "x"; 
      }
      break;
    case "x": // This just makes the blue go back down so the red fades in smoothly
      if (b >= 0) {
        b -= inc // Blue decrease
        r += inc // Red increase
      } else {
        currentColour = "r";
      }
      break;
  }
}
