# Benessere Digitale - Blog

Un progetto per un blog che esplora come mantenere un equilibrio tra vita digitale e benessere personale. Questo progetto utilizza Node.js, Express, MongoDB e Postman per la gestione e visualizzazione dei contenuti.

## Tecnologie Utilizzate
- **Node.js**: Server JavaScript per gestire le richieste e le risposte del sito.
- **Express**: Framework per Node.js per creare il server e le API.
- **MongoDB**: Database NoSQL per archiviare gli articoli del blog.
- **Postman**: Strumento per testare le API.

## Installazione

1. **Clona il repository**:
   git clone https://github.com/Crixsteen/Benessere-Digitale-Blog.git
   
Entra nella cartella del progetto:
cd Benessere-Digitale-Blog

Installa le dipendenze:
npm install

Configura MongoDB:

Crea un database su MongoDB Atlas o usa un'istanza locale di MongoDB.
Crea un file .env nella cartella principale con il seguente contenuto:
MONGODB_URI=tuo_uri_mongodb
PORT=5000

Avvia il server:
node server/server.js

Test API con Postman:

Importa le richieste in Postman per testare l'endpoint API /posts.
Puoi fare richieste GET e POST per visualizzare e creare nuovi articoli.

Funzionalità
Visualizzazione degli articoli.
Creazione di nuovi articoli tramite API.
Interfaccia utente moderna con layout responsive.
Struttura del Progetto
public/: Contiene i file statici come immagini e CSS.
server/: Contiene il codice del server e le API.
routes/: Contiene le definizioni delle rotte.
models/: Contiene i modelli per MongoDB.

Autore
Creato da Cristina.

Licenza
Questo progetto è distribuito sotto licenza MIT.



