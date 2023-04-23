var emergencyLink = "";

document.getElementById("emergency-link-btn").addEventListener("click", function() {
  document.getElementById("emergency-link-input-container").style.display = "block";
});

document.getElementById("emergency-link-save-btn").addEventListener("click", function() {
  var link = document.getElementById("emergency-link-input").value;
  emergencyLink = link;
  document.getElementById("emergency-link-input-container").style.display = "none";
  
  // Show "Saved" message for 2 seconds
  var messageContainer = document.getElementById("message-container");
  messageContainer.innerText = "Saved";
  messageContainer.style.display = "block";
  setTimeout(function() {
    messageContainer.style.display = "none";
  }, 2000);
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "a") {
    window.location.href = emergencyLink;
  }
});
