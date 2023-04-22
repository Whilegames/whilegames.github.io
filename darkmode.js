const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');
const gameSection = document.querySelector('.games');
const darkElements = document.querySelectorAll('.dark-element');
const gameTitle = document.querySelector('.game h3');
const gameDescription = document.querySelector('.game p');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    gameSection.classList.add('game-section-dark');
    gameSection.classList.remove('game-section-light');
    gameTitle.classList.add('game-title-light');
    gameTitle.classList.remove('game-title-dark');
    gameDescription.classList.add('game-description-light');
    gameDescription.classList.remove('game-description-dark');
    darkElements.forEach(element => {
      element.classList.add('dark-element-dark');
      element.classList.remove('dark-element-light');
    });
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    gameSection.classList.add('game-section-light');
    gameSection.classList.remove('game-section-dark');
    gameTitle.classList.add('game-title-dark');
    gameTitle.classList.remove('game-title-light');
    gameDescription.classList.add('game-description-dark');
    gameDescription.classList.remove('game-description-light');
    darkElements.forEach(element => {
      element.classList.add('dark-element-light');
      element.classList.remove('dark-element-dark');
    });
  }    
});
