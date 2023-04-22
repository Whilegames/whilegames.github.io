// Get the input field and submit button
var inputField = document.getElementById("input-field");
var submitButton = document.getElementById("submit-button");

// Add event listener for the Enter key press
inputField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    // Trigger the button click event
    submitButton.click();
  }
});

// Add event listener for the Ctrl + A key press
document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.keyCode === 65) {
    // Get the input value and redirect to the URL
    var inputValue = inputField.value;
    if (inputValue !== "") {
      window.location.href = inputValue;
    }
  }
});
