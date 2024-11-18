const colorButton = document.getElementById("colorButton");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const container = document.getElementById("container");



colorButton.onclick = () => {
const table = document.getElementById("main-table");
table.style.backgroundColor = 'gold';
table.style.backgroundColor = 'yellow';
    console.log("clicked");
}


startButton.onclick = () => {
pauseButton.classList.remove("hidden");
startButton.classList.add("hidden");
pauseButton.style.backgroundColor = 'gold';
container.animate.animate([
    // key frames
    { transform: 'translateY(0px)' },
    { transform: 'translateY(-300px)' }
], {
    // sync options
    duration: 1000,
    iterations: Infinity
});


}


pauseButton.onclick = () => {
    pauseButton.classList.add("hidden");
    startButton.classList.remove("hidden");
    startButton.style.backgroundColor = 'yelow';
}

