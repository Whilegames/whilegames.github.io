var emergencyLink = "";

document.getElementById("emergency-link-btn").addEventListener("click", function() {
  document.getElementById("emergency-link-input-container").style.display = "block";
});

document.getElementById("emergency-link-save-btn").addEventListener("click", function() {
  var link = document.getElementById("emergency-link-input").value;
  emergencyLink = link;
  document.getElementById("emergency-link-input-container").style.display = "none";
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key === "a") {
    window.location.href = emergencyLink;
  }
});
