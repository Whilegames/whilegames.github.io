const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');
const gameDescription = document.querySelector('#game-description');
const darkElements = document.querySelectorAll('.dark-element');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    gameDescription.classList.add('game-description-light');
    gameDescription.classList.remove('game-description-dark');
    darkElements.forEach(element => {
      element.classList.add('dark-element-dark');
      element.classList.remove('dark-element-light');
    });
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    gameDescription.classList.add('game-description-dark');
    gameDescription.classList.remove('game-description-light');
    darkElements.forEach(element => {
      element.classList.add('dark-element-light');
      element.classList.remove('dark-element-dark');
    });
  }    
});
