// Get a random number between 0 and 1
const randomNumber = Math.random();

// If the random number is greater than 0.5, show the popup
if (randomNumber > 0.5) {
  // Get the popup and close button elements
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("close-popup");
  
  // Show the popup
  popup.style.display = "block";
  
  // Add an event listener to the close button to hide the popup when clicked
  closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
  });
}

// Get the button element and add an event listener to show the popup when clicked
const showBtn = document.getElementById("show-popup");
showBtn.addEventListener("click", function() {
  // Get the code to show the popup here
});
