// script for focus state
let inputContainerEl = document.querySelector('.input-container-1 input');
let iconEl = document.querySelector('.icon-container');

inputContainerEl.addEventListener("focus", () => {
  iconEl.style.background = 'hsl(61, 70%, 52%)';
  iconEl.style.borderColor = 'hsl(61, 70%, 52%)';
});

inputContainerEl.addEventListener("blur", () => {
  iconEl.style.background = '';  // Reset to default or add your preferred default color
  iconEl.style.borderColor = ''; // Reset to default
});

