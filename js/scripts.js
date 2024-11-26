// JavaScript to dynamically load content
document.addEventListener("DOMContentLoaded", function() {
  // Function to load content into a section
  function loadContent(section, fileName) {
    // Debug: Log file being fetched
    console.log(`Fetching content for: ${fileName}.html`);

    fetch(`content/${fileName}.html`) // Ensure this path is correct
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${fileName}.html, Status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        document.getElementById(section).innerHTML = data;
      })
      .catch(error => {
        // Log errors to console for debugging
        console.error("Error loading content:", error);
        document.getElementById(section).innerHTML = `<p>Sorry, the content could not be loaded. Please try again later.</p>`;
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
