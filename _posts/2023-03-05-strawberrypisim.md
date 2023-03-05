---
title: Simulando o problema das agulhas de Buffon
published: 2023-02-05
excerpt: "Uma demonstração completamente interativa do método de Monte Carlo"
permalink: /posts/2023/03/strawberrypisim/ 
---
<html>
<head>
	<script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@3.9.0/dist/tf.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/knn-classifier@3.4.0/dist/knn-classifier.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@2.0.4/dist/mobilenet.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/body-pix@2.1.0/dist/body-pix.min.js"></script>
  <script src="simulation.py"></script>
</head>
<body>

	<h1>Buffon Needle Simulation</h1>

	<p>Enter the number of needles to toss:</p>
	<input type="number" id="num-needles" value="1000">
	<br><br>
	<button onclick="startSimulation()">Start Simulation</button>
	
	<p id="simulation-output"></p>

	<script>
		function startSimulation() {
			const numNeedles = document.getElementById("num-needles").value;
			const outputElement = document.getElementById("simulation-output");
			outputElement.innerHTML = "Simulating...";

			runSimulation(numNeedles)
				.then((results) => {
					outputElement.innerHTML = results;
				})
				.catch((error) => {
					outputElement.innerHTML = "Error: " + error;
				});
		}

		async function runSimulation(numNeedles) {
			// Simulation script goes here
			// ...
			return "Simulation complete!";
		}
	</script>

</body>
</html>
