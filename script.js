// Gera uma cor aleatória em formato HEX
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Gera a paleta de cores
function generatePalette() {
  const paletteContainer = document.getElementById('palette-container');
  paletteContainer.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    const color = getRandomColor();

    const card = document.createElement('div');
    card.classList.add('color-card');

    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = color;

    const hexCode = document.createElement('p');
    hexCode.classList.add('hex');
    hexCode.textContent = color;

    card.appendChild(colorDiv);
    card.appendChild(hexCode);

    // Copiar ao clicar
    card.addEventListener('click', () => {
      navigator.clipboard.writeText(color);
      alert(`Cor ${color} copiada!`);
    });

    paletteContainer.appendChild(card);
  }
}

// Evento para o botão
document.getElementById('generate').addEventListener('click', generatePalette);

// Gera uma paleta ao carregar a página
window.addEventListener('load', generatePalette);


