const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');
const gameDescription = document.querySelector('#game-description');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    gameDescription.classList.add('game-description-dark');
    gameDescription.classList.remove('game-description-light');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    gameDescription.classList.add('game-description-light');
    gameDescription.classList.remove('game-description-dark');
  }    
});
