const toggleBtn = document.getElementById("toggleTheme");
const body = document.body;
const navbar = document.querySelector(".navbar");
const cards = document.querySelectorAll(".card");

// Fonction qui applique un thème
function applyTheme(isDark) {
  if (isDark) {
    body.classList.remove("bg-light", "text-dark");
    body.classList.add("bg-dark", "text-white");

    navbar.classList.remove("bg-light", "navbar-light");
    navbar.classList.add("bg-dark", "navbar-dark");

    toggleBtn.textContent = "Activer le mode clair";
    toggleBtn.classList.remove("btn-outline-secondary");
    toggleBtn.classList.add("btn-outline-light");

    cards.forEach(card => {
      card.classList.remove("bg-light", "text-dark");
      card.classList.add("bg-secondary", "text-white");
    });
  } else {
    body.classList.remove("bg-dark", "text-white");
    body.classList.add("bg-light", "text-dark");

    navbar.classList.remove("bg-dark", "navbar-dark");
    navbar.classList.add("bg-light", "navbar-light");

    toggleBtn.textContent = "Activer le mode sombre";
    toggleBtn.classList.remove("btn-outline-light");
    toggleBtn.classList.add("btn-outline-secondary");

    cards.forEach(card => {
      card.classList.remove("bg-secondary", "text-white");
      card.classList.add("bg-light", "text-dark");
    });
  }

  // Sauvegarder le choix dans localStorage
  localStorage.setItem("darkMode", isDark ? "true" : "false");
}

// Charger le thème depuis localStorage
const savedMode = localStorage.getItem("darkMode");
const darkMode = savedMode === "true";
applyTheme(darkMode);

// Bouton toggle
toggleBtn.addEventListener("click", () => {
  const current = body.classList.contains("bg-dark");
  applyTheme(!current);
});

// Contenu dynamique au chargement
document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("currentYear");
  if (el) el.textContent = new Date().getFullYear();

  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Merci pour votre inscription !");
      form.reset();
    });
  }
});
