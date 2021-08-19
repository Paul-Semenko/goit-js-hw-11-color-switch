const buttonStart = document.querySelector('button[data-action="start"]');
console.log(buttonStart);
const buttonStop = document.querySelector('button[data-action="stop"]');
console.log(buttonStop);

buttonStart.addEventListener('click', colorChangeStart);

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548', ];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



function switcher() {
    const randomColorIndex = randomIntegerFromInterval(0, colors.length - 1);
    const selectedColor = colors[randomColorIndex];
    document.body.style.backgroundColor = selectedColor;
}

let id = null;

function colorChangeStart() {
    id = setInterval(switcher, 1000);
    buttonStart.setAttribute('disabled', true);
}

function colorChangeStop() {
    clearInterval(id);
    buttonStart.disabled = false;
}
buttonStop.addEventListener('click', colorChangeStop);