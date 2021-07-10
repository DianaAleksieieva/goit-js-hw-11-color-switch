
const body = document.querySelector('body');
const startButon = document.querySelector('#buttonStart');
const stopButon = document.querySelector('#buttonStop');
let timerId = null;

   
startButon.addEventListener('click',
  start => {
    timerId = setInterval(changeColor, 1000)
    startButon.setAttribute('disabled', true);
    startButon.classList.add('buttonDisabled');
  });
stopButon.addEventListener('click', stop => stopColorChange()); 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = () => {
    body.style.backgroundColor = getRandomHexColor();
}

const stopColorChange = () => {
  clearInterval(timerId);
  startButon.removeAttribute('disabled');
  startButon.classList.remove('buttonDisabled');
}

