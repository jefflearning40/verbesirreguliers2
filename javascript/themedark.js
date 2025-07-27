const toggleBtn = document.getElementById("toggleTheme");
  const body = document.body;
  const cards = document.querySelectorAll(".card");

  let darkMode = false;

  toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
      body.classList.remove("bg-light", "text-dark");
      body.classList.add("bg-dark", "text-white");
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
      toggleBtn.textContent = "Activer le mode sombre";
      toggleBtn.classList.remove("btn-outline-light");
      toggleBtn.classList.add("btn-outline-secondary");

      cards.forEach(card => {
        card.classList.remove("bg-secondary", "text-white");
        card.classList.add("bg-light", "text-dark");
      });
    }
  });

  // Appliquer thème clair par défaut
  body.classList.add("bg-light", "text-dark");
  cards.forEach(card => card.classList.add("bg-light", "text-dark"));

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
