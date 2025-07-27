'use strict';

(function() {
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    const input = form.querySelector('input[type="email"]');

    function isValidEmail(email) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      return regex.test(email);
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const raw = input.value.trim();

      if (!isValidEmail(raw)) {
        alert('Veuillez saisir une adresse e‑mail valide.');
        return;
      }

      // Suppression des retours à la ligne pour éviter les injections d’entêtes
      const safeEmail = raw.replace(/[\r\n%0a%0d]/gi, '');

      // Envoi avec fetch() vers le serveur Node.js
      fetch('http://localhost:3000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: safeEmail })
      })
      .then(response => response.json())
      .then(data => {
        alert(data.message); // Réponse du serveur Node
        form.reset();
      })
      .catch(error => {
        console.error('Erreur lors de l’envoi :', error);
        alert('Une erreur est survenue. Veuillez réessayer plus tard.');
      });
    });
  });
})();
