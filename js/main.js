// Cargar automáticamente navbar y footer
document.addEventListener("DOMContentLoaded", () => {
    // Si estoy en pages/* necesito subir un nivel
    const isInPages = window.location.pathname.includes("/pages/");
    const prefix = isInPages ? "../" : "./";
  
    loadPartial("navbar", prefix + "partials/navbar.html", setActiveLink);
    loadPartial("footer", prefix + "partials/footer.html");
  });
  
  
  function loadPartial(id, file, callback) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
        if (callback) callback(); // ejecutar callback después de cargar
      });
  }
  
  // Navbar scrolled effect
  document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  });
  
  // Resaltar link activo según la página actual
  function setActiveLink() {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname.split("/").pop(); // ej: index.html
  
    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href").split("/").pop();
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  }
  