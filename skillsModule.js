let discoInterval;

// startDisco() 
function startDisco() {
    if (discoInterval) clearInterval(discoInterval);
    
    // Color intervals
    discoInterval = setInterval(() => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }, 100); // Change color every 100ms 
}

// stopDisco() 
function stopDisco() {
    clearInterval(discoInterval);
}

// "Start Disco" and "Stop Disco" buttons
const startButton = document.createElement("button");
startButton.innerText = "Start Disco";
startButton.style.padding = "10px 20px";
startButton.style.fontSize = "16px";
startButton.style.cursor = "pointer";
startButton.onclick = startDisco;
document.body.appendChild(startButton);

const stopButton = document.createElement("button");
stopButton.innerText = "Stop Disco";
stopButton.style.padding = "10px 20px";
stopButton.style.fontSize = "16px";
stopButton.style.cursor = "pointer";
stopButton.onclick = stopDisco;
document.body.appendChild(stopButton);
