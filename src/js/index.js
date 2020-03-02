import '../css/styles.scss';

const textComponent = () => {
  const elH11 = document.createElement('h1');
  elH11.innerHTML = 'Olá Mundo!';
  elH11.classList.add('title');
  return elH11;
};

document.body.appendChild(textComponent());
