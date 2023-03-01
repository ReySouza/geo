// Define the simulation parameters
const AGULHAS = 10000;
const LENGTH = 0.5;
const BOARDS = 2;

// Initialize the simulation state
let floor = [];
let needleObjects = [];
let numIntersections = 0;

// Get the canvas element from the HTML document
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions
canvas.width = 600;
canvas.height = 600;

// Plot the floor boards on the canvas
function plotFloorBoards() {
  ctx.strokeStyle = 'black';
  for (let i = 0; i < BOARDS; i++) {
    let y = (i + 1) * canvas.height / (BOARDS + 1);
    floor.push(y);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

// Define the Needle object
class Needle {
  constructor(x, y, theta) {
    this.x = x;
    this.y = y;
    this.theta = theta;
    this.endPoints = [
      [this.x - LENGTH / 2 * Math.cos(this.theta), this.y - LENGTH / 2 * Math.sin(this.theta)],
      [this.x + LENGTH / 2 * Math.cos(this.theta), this.y + LENGTH / 2 * Math.sin(this.theta)]
    ];
  }

  // Check if the needle intersects with a floor board
  intersectsWithFloor() {
    for (let i = 0; i < BOARDS; i++) {
      if (this.endPoints[0][1] < floor[i] && this.endPoints[1][1] > floor[i]) {
        return true;
      }
    }
    return false;
  }

  // Draw the needle on the canvas
  draw(color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(this.endPoints[0][0], this.endPoints[0][1]);
    ctx.lineTo(this.endPoints[1][0], this.endPoints[1][1]);
    ctx.stroke();
  }
}

// Run the simulation
function runSimulation() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Plot the floor boards
  plotFloorBoards();

  // Toss the needles
  for (let i = 0; i < AGULHAS; i++) {
    let needle = new Needle(Math.random(), Math.random(), Math.random() * Math.PI);
    needleObjects.push(needle);

    if (needle.intersectsWithFloor()) {
      numIntersections++;
      needle.draw('green');
    } else {
      needle.draw('red');
    }

    // Update the estimate of pi
    let piEstimate = 2 * AGULHAS * LENGTH / (numIntersections * BOARDS);
    let error = Math.abs((Math.PI - piEstimate) / Math.PI * 100);

    // Update the simulation results
    document.getElementById('intersections').textContent = `Intersections: ${numIntersections}`;
    document.getElementById('needles').textContent = `Agulhas: ${i + 1}`;
    document.getElementById('estimate').textContent = `Aproximação de Pi: ${piEstimate.toFixed(5)}`;
  }
}

// Add event listener to start the simulation when the "Start" button is clicked
document.getElementById('start').addEventListener('click', () => {
  runSimulation();
});
