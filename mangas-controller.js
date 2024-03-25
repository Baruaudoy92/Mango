const Mangas = require("../models/mangas");

// function asynchrone 
const createMangas = async (req, res) => {
  try {
    // recup elements recu du front-end -1
    const { 
      title, 
      author, 
      publication_date, 
      genre, description, 
      stock_quantity, 
      image
     }  = req.body;

    // Validate publication_date format (assuming it's a string)
    const isValidDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(publication_date);
    if (!isValidDate) {
      throw new Error('Invalid publication_date format. Please provide a date in YYYY-MM-DD format.');
    }

    // creer un utilisateur grace au model "Mangas" -2
    const newMangas = await Mangas.create({
      title,
      author,
      publication_date,
      genre,
      description,
      stock_quantity,
      image
    });

    // Return the newly created manga
    res.status(201).json(newMangas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllMangas = async (req, res) => {
  try {
    // chercher tout les elements dans la table "mangas"
      const mangas = await Mangas.findAll();
    // envoyer une reponse 200 avec les elements de la table "manags".
      res.status(200).json(mangas);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const getMangasById = async (req, res) => {
  try {
      // recuper l'id du manga dans le lien URL"https..."
      const mangasId = req.params.id;
      // chercher tout les elements dans la table "manga" qui on comme id = mangaId
      const mangas = await Mangas.findByPk(mangasId);
      // si le manga n'existe pas 
      if (!mangas) {
          return res.status(404).json({ error: "manga non trouvé" });
      }
       // response 200 avec les element du manga
      res.status(200).json(mangas);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const updateMangas = async (req, res) => {
  try {
     // recuper l'id du manga que je veux mettre a un jour dans le lien 
      const mangasId = req.params.id;
       // recup du front-end a mettre un jour
      const { title, author, publication_date, genre, description, stock_quantity, image } = req.body;
      // chercher tout les elements dans la table "manga" qui a comme id = mangaId
      const mangas = await Mangas.findByPk(mangasId);
      if (!mangas) {
          return res.status(404).json({ error: "manga non trouvé" });
      }

      mangas.title = title;
      mangas.author = author;
      mangas.publication_date = publication_date;
      mangas.genre = genre;
      mangas.description = description;
      mangas.stock_quantity = stock_quantity;
      mangas.image = image;

      await mangas.save();
     // enregistrer dans la bdd

      res.status(200).json(mangas);
      // renvoie reponse 200 avec les elements du manga
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const deleteMangas = async (req, res) => {
  try {
      // recuper l'id du manga dans le lien de la requette
      const mangasId = req.params.id;
      // chercher tout les elements dans la table "manga" qui on comme id = mangaId
      const mangas = await Mangas.findByPk(mangasId);
      if (!mangas) {
          return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      // si la manga existe "delete User" 
      await mangas.destroy();
      res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }

};

module.exports = {
  createMangas,
  getAllMangas,
  getMangasById,
  updateMangas,
  deleteMangas
};
