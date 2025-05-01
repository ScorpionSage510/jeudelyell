// Afficher la valeur du curseur en temps réel
const slider = document.getElementById('speed-slider');
const sliderValue = document.getElementById('slider-value');
const randomButton = document.getElementById('random-button');

// Met à jour la valeur du slider
slider.addEventListener('input', () => {
  sliderValue.textContent = slider.value;
});

// Action pour le bouton "Aléatoire"
randomButton.addEventListener('click', () => {
  const randomValue = Math.floor(Math.random() * 100) + 1; // Entre 1 et 100
  slider.value = randomValue;
  sliderValue.textContent = randomValue;
});

// Ajout d'actions simples aux boutons
document.getElementById('button1').addEventListener('click', () => {
  alert('Action du Bouton 1');
});

document.getElementById('button2').addEventListener('click', () => {
  alert('Action du Bouton 2');
});

document.getElementById('button3').addEventListener('click', () => {
  alert('Action du Bouton 3');
});
