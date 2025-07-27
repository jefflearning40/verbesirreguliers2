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

      // suppression des retours à la ligne pour éviter les injections d’entêtes
      const safeEmail = raw.replace(/[\r\n%0a%0d]/gi, '');

      // Ici vous pouvez envoyer safeEmail via fetch/AJAX vers votre serveur sécurisé
      console.log('Email sécurisé à envoyer :', safeEmail);

      alert('Merci pour votre inscription !');
      form.reset();
    });
  });
})();
