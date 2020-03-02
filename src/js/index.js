const textComponent = () => {
  const elH11 = document.createElement('h1');
  elH11.innerHTML = 'Olá Mundo!';
  return elH11;
};

document.body.appendChild(textComponent());
