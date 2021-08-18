const buttonStart = document.querySelector('button[data-action="start"]');
console.log(buttonStart);
const buttonStop = document.querySelector('button[data-action="stop"]');
console.log(buttonStop);

buttonStart.addEventListener('click', colorChangeStart);


function switcher() {
    const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548', ];
    const bodyBgChange = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[bodyBgChange];
    document.body.style.backgroundColor = selectedColor;
    buttonStart.setAttribute('disabled', true);

}

let id = null;

function colorChangeStart() {
    id = setInterval(switcher, 1000);
}

function colorChangeStop() {
    clearInterval(id);
    buttonStart.disabled = false;
}
buttonStop.addEventListener('click', colorChangeStop);