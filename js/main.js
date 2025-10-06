// Cargar automáticamente navbar y footer
document.addEventListener("DOMContentLoaded", () => {
  const isInPages = window.location.pathname.includes("/pages/");
  const prefix = isInPages ? "../" : "./";

  loadPartial("navbar", prefix + "partials/navbar.html", fixNavbarLinks);
  loadPartial("footer", prefix + "partials/footer.html");
});

function loadPartial(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback();
    });
}

// 🔧 Corrige los href del navbar automáticamente según el contexto
function fixNavbarLinks() {
  const base = window.location.pathname.split("/")[1]; // "onplay"
  const isInPages = window.location.pathname.includes("/pages/");
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    let href = link.getAttribute("href");
    // si el href empieza por "pages/", lo hacemos absoluto al proyecto
    if (href.startsWith("pages/")) {
      link.setAttribute("href", `/${base}/${href}`);
    }
    // si es "index.html", lo ajustamos también
    else if (href === "index.html") {
      link.setAttribute("href", `/${base}/${href}`);
    }
  });

  setActiveLink(); // vuelve a marcar el activo
}

// 🔸 Mantiene activo el link actual
function setActiveLink() {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}
