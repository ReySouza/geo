const canvas = document.getElementById('canvas');
const plotDiv = document.getElementById('plot');

let needles = 1000;
let needleLength = 0.5;
let boardWidth = 1;
let boards = 2;

document.getElementById('start').addEventListener('click', startSimulation);

function startSimulation() {
  needles = document.getElementById('needles').value;
  needleLength = document.getElementById('length').value;
  boards = document.getElementById('boards').value;
  clearCanvas();
  plotDiv.innerHTML = '';
  runSimulation();
}

function clearCanvas() {
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function runSimulation() {
  let hits = 0;
  for (let i = 0; i < needles; i++) {
    const x1 = Math.random() * boards * boardWidth;
    const y1 = Math.random() * canvas.height;
    const angle = Math.random() * Math.PI;
    const x2 = x1 + Math.cos(angle) * needleLength;
    const y2 = y1 + Math.sin(angle) * needleLength;

    if (x2 > boards * boardWidth || x2 < 0) {
      hits++;
      drawLine(x1, y1, x2, y2, true);
    } else {
      drawLine(x1, y1, x2, y2, false);
    }
  }

  const piEstimate = (2 * needleLength * needles) / (boardWidth * hits);
  plotResult(piEstimate);
}

function drawLine(x1, y1, x2, y2, hit) {
  const context = canvas.getContext('2d');
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  if (hit) {
    context.strokeStyle = 'red';
  } else {
    context.strokeStyle = 'black';
  }
  context.stroke();
}

function plotResult(piEstimate) {
  const x = [boards];
  const y = [piEstimate];
  for (let i = 1; i <= boards; i++) {
    x.push(i);
    y.push(Math.PI);
  }

  const data = [
    {
      x: x,
      y: y,
      type: 'scatter',
      mode: 'lines',
      name: 'PI Estimate',
    },
  ];
  const layout = {
    title: 'PI Estimate vs Actual PI',
    xaxis: {
      title: 'Number of boards',
      range: [0, boards + 1],
    },
    yaxis: {
      title: 'PI Estimate',
    },
  };
  Plotly.newPlot('plot', data, layout);
}
