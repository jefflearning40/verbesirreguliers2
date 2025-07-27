const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à la base MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // remplace par ton utilisateur
  password: '',         // ton mot de passe MySQL
  database: 'nom_de_ta_base'  // remplace par le vrai nom
});

// Route POST pour recevoir les e‑mails
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;

  if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Adresse e-mail invalide.' });
  }

  // Nettoyage de l’e-mail pour éviter les injections
  const safeEmail = email.replace(/[\r\n%0a%0d]/gi, '');

  // Insertion dans la base
  const sql = 'INSERT INTO newsletter (email) VALUES (?)';
  db.query(sql, [safeEmail], (err) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.json({ success: false, message: 'Cet e‑mail est déjà inscrit.' });
      }
      console.error(err);
      return res.status(500).json({ success: false, message: 'Erreur serveur.' });
    }

    res.json({ success: true, message: 'Merci pour votre inscription !' });
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
