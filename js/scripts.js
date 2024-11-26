// JavaScript to dynamically load content
document.addEventListener("DOMContentLoaded", function() {
  // Function to load content into a section
  function loadContent(section, fileName) {
    fetch(`content/${fileName}.html`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${fileName}.html`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(section).innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading content:", error);
        document.getElementById(section).innerHTML = `<p>Sorry, the content could not be loaded.</p>`;
      });
  }

  // Load sections dynamically
  loadContent("home", "home");
  loadContent("about", "about");
  loadContent("portfolio", "portfolio");
  loadContent("solutions", "solutions");
  loadContent("team", "team");
  loadContent("updates", "updates");
  loadContent("contact", "contact");
});
