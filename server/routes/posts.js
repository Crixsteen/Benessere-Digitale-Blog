const express = require('express');
const router = express.Router();
const Post = require('../models/Post'); // Importa lo schema del Post

// Rotta per creare un nuovo post
router.post('/', async (req, res) => {
    const { title, content, author } = req.body;

    // Controlla se tutti i campi sono presenti
    if (!title || !content || !author) {
        return res.status(400).json({
            message: "Validazione post fallita: il campo `title`, `content`, e `author` è obbligatorio."
        });
    }

    try {
        // Crea e salva il nuovo post nel database
        const newPost = new Post({ title, content, author });
        await newPost.save(); // Salva il post nel database
        res.status(201).json({
            message: 'Post creato con successo!',
            post: newPost
        });
    } catch (error) {
        res.status(500).json({ message: 'Errore durante la creazione del post', error });
    }
});

// Rotta per ottenere tutti i post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find(); // Recupera tutti i post dal database
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Errore durante il recupero dei post', error });
    }
});

// Esporta il router per poterlo utilizzare nel file principale
module.exports = router;
