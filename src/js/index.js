import '../css/styles.scss';

import img from '../assets/bg.jpg';

const textComponent = () => {
  const elH11 = document.createElement('h1');
  elH11.innerHTML = 'Olá Mundo!';
  elH11.classList.add('title');
  return elH11;
};

const imgComponent = () => {
  const elImg = new Image(300, 150);
  elImg.src = img;
  return elImg;
};

document.body.appendChild(textComponent());
document.body.appendChild(imgComponent());
