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

  // Temporarily load static content if dynamic loading fails (for testing purposes)
  const staticContent = {
    home: "<div class='home-section'><h1>Welcome to KinKinetics</h1><h2>Empowering Precision Under Pressure</h2><p>Revolutionizing time-critical decision-making in life-saving moments and mission-critical operations.</p><button>Learn More</button></div>",
    about: "<h2>About KinKinetics</h2><p>We specialize in AI-driven decision support systems.</p>",
    portfolio: "<h2>Portfolio</h2><p>Check out our groundbreaking projects.</p>",
    solutions: "<h2>Solutions</h2><ul><li>AI Decision Support</li><li>Time-Critical Operations</li></ul>",
    team: "<h2>Meet the Team</h2><p>Our team consists of experts in AI, operations, and technology.</p>",
    updates: "<h2>Latest Updates</h2><p>Stay tuned for our latest news and updates.</p>",
    contact: "<h2>Contact Us</h2><p>Get in touch for more information.</p>"
  };

  // Load sections dynamically or fallback to static content for testing
  Object.keys(staticContent).forEach(section => {
    const sectionContent = staticContent[section];
    document.getElementById(section).innerHTML = sectionContent;
  });

  // Uncomment the next line to enable dynamic loading (ensure content files exist)
  // loadContent("home", "home");
  // loadContent("about", "about");
  // loadContent("portfolio", "portfolio");
  // loadContent("solutions", "solutions");
  // loadContent("team", "team");
  // loadContent("updates", "updates");
  // loadContent("contact", "contact");
});
