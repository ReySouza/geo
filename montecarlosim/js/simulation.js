 const canvasWidth = 800;
      const canvasHeight = 600;
      const floorboardSpacing = 50;
      const needleLength = 50;
      const needleColor = "blue";
      const intersectingNeedleColor = "red";
      const floorboardColor = "black";
      
      let needlesTossed = 0;
      let intersections = 0;
      
      function getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
      }
      
      function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      function drawFloorboards(ctx) {
        for (let y = floorboardSpacing / 2; y < canvasHeight; y += floorboardSpacing) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvasWidth, y);
          ctx.strokeStyle = floorboardColor;
          ctx.stroke();
        }
      }
      
      function generateNeedle() {
        const x1 = getRandomFloat(0, canvasWidth);
        const y1 = getRandomFloat(0, canvasHeight);
        const angle = getRandomFloat(0, Math.PI);
        const x2 = x1 + needleLength * Math.cos(angle);
        const y2 = y1 + needleLength * Math.sin(angle);
        return [x1, y1, x2, y2];
      }
      
      function checkIntersect(needle) {
        const y = Math.floor(needle[1] / floorboardSpacing) * floorboardSpacing;
        const intersects = needle[1] <= y + needleLength / 2 || needle[1] >= y + floorboardSpacing - needleLength / 2;
        if (intersects) {
          intersections++;
        }
        return intersects;
      }
      
      function drawNeedle(ctx, needle, intersects) {
        ctx.beginPath();
        ctx.moveTo(needle[0], needle[1]);
        ctx.lineTo(needle[2], needle[3]);
        ctx.strokeStyle = intersects ? intersectingNeedleColor : needleColor;
        ctx.stroke();
      }
      
      function updateResults() {
        needlesTossed++;
        const piEstimate = (needlesTossed / intersections) || 0;
        document.getElementById("needles-tossed").textContent = needlesTossed;
        document.getElementById("intersections").textContent = intersections;
        document.getElementById("pi-estimate").textContent = piEstimate.toFixed(6);
      }
      
      function startSimulation()

{
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// clear the canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // draw the floorboards
    drawFloorboards(ctx);
    
    // generate and draw a needle
    const needle = generateNeedle();
    const intersects = checkIntersect(needle);
    drawNeedle(ctx, needle, intersects);
    
    // update the results
    updateResults();
  }
  
  // add event listener to start the simulation on button click
  document.getElementById("start-button").addEventListener("click", startSimulation);
