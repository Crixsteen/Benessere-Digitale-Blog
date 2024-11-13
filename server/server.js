require('dotenv').config(); // Carica le variabili d'ambiente

// Importa le librerie necessarie
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Inizializza l'app Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Abilita CORS
app.use(express.json()); // Parse delle richieste JSON
app.use(express.static('public')); // Servire file statici dalla cartella 'public'

// Importa e utilizza le rotte per i post
const postsRoutes = require('./routes/posts');
app.use('/posts', postsRoutes);

// Connessione a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connesso al database MongoDB'))
    .catch(error => console.error('Errore di connessione:', error));

// Rotta di base per testare il server
app.get('/', (req, res) => {
    res.send('Benvenuto nel CMS del Blog!');
});

// Avvio del server
app.listen(PORT, () => {
    console.log(`Server attivo su http://localhost:${PORT}`);
});

