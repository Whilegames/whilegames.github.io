const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }    
});
