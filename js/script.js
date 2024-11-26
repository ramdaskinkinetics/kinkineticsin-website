// JavaScript to dynamically load content
document.addEventListener("DOMContentLoaded", function() {
  // Function to load content into a section
  function loadContent(section, fileName) {
      fetch(`content/${fileName}.html`)
          .then(response => response.text())
          .then(data => {
              document.getElementById(section).innerHTML = data;
          })
          .catch(error => console.error("Error loading content: ", error));
  }

  // Load sections dynamically
  loadContent("home", "home");
  loadContent("about", "about");
  loadContent("portfolio", "portfolio");
  loadContent("solutions", "solutions");
  loadContent("team", "team");
  loadContent("contact", "contact");
});
