let discoInterval;
const audio = new Audio('discotheque.mp3'); 

// startDisco() 
function startDisco() {
    if (discoInterval) clearInterval(discoInterval);
    audio.play(); // Start playing the music

    // Color intervals
    discoInterval = setInterval(() => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    }, 100); // Change color every 100ms 
}

// stopDisco() 
function stopDisco() {
    clearInterval(discoInterval);
    audio.pause(); // Stop the music
    audio.currentTime = 0; // Reset the audio to the beginning
}

// "Start Disco" and "Stop Disco" buttons
const startButton = document.createElement("button");
startButton.innerText = "Start Disco";
startButton.style.padding = "10px 20px";
startButton.style.fontSize = "16px";
startButton.style.cursor = "pointer";
startButton.style.border = "none";
startButton.style.borderRadius = "10px";
startButton.onclick = startDisco;
document.body.appendChild(startButton);

const stopButton = document.createElement("button");
stopButton.innerText = "Stop Disco";
stopButton.style.padding = "10px 20px";
stopButton.style.fontSize = "16px";
stopButton.style.cursor = "pointer";
stopButton.style.border = "none";
stopButton.style.borderRadius = "10px";
stopButton.onclick = stopDisco;
document.body.appendChild(stopButton);
