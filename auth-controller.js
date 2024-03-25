// Importer les liberies "bcrpte et jwt";
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const Client = require("../models/client")
// function asynchrone 
const register = async (req,res)=>{
    try {
        // recup elements recu du front-end -1
        const{
            first_name,
            last_name,
            email,
            phone_number,
            address,
            birth_date,
            password
        }=req.body;

        // securiter - Bcrypt => rajout de longeur salt 'Bcrypt-hasher le mot de passe' -2
        const salt=await bcrypt.genSalt();
        const hashPassword=await bcrypt.hash(password,salt)
        // creer un utilisateur grace au model "CLIENT" -3
        const user=new Client({
            first_name,
            last_name,
            email,
            phone_number,
            address,
            birth_date,
            password: hashPassword
        })
        // enregistrer l'utilisateur 4
        const newUser= await user.save();
        // envoie la reponse 200 = OK "envoie la reponse a client-front -5
        res.status(200).json(newUser)
    } catch (error) {
        // envoie la reponse 401 = erreur -6
        res.status(401).json({error:error.message})
    }
}

const login = async (req, res) => {
    try {
         // recup elements recu du front-end -1
        const { email, password } = req.body;
        // chercher si l'email existe dans la bdd "client" -2 Methode -findOne()
        const user = await Client.findOne({ where: { email: email } });

        // si l email corespondant pas
        if (!user) {
            // envoie reponse 400
            return res.status(400).json({ error: "Cet utilisateur n'existe pas" });
        }
        // comparer avec le password du req.body Methode -compare()
        const isPassCorrect = await bcrypt.compare(password, user.password);
        // si il n'y a pas de password corespondant
        if (!isPassCorrect) {
            return res.status(400).json({ error: "Email/Mot de passe incorrect" });
        }

        // JWT token - creer un token quand email et password OK
        const token = jwt.sign({ userId: user.client_id }, process.env.SECRET_TOKEN, { expiresIn: '2h' });

        // evoie reponse 200 element du "user" + token
        res.status(200).json({
            user: {
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                phone_number: user.phone_number,
                address: user.address,
                birth_date: user.birth_date,
            },
            token: token, 
        });
    } catch (error) {
        console.log("Erreur lors de la connexion", error.message);
        res.status(500).json({ error: error.message });
    }
};

const getAllUsers = async (req, res) => {
  try {
    // chercher tout les elements dans la table "client"
      const users = await Client.findAll();
      // envoyer une reponse 200 avec les elements de la table "client".
      res.status(200).json(users);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    // recuper l'id du user dans le lien URL"https..."
      const userId = req.params.id;
      // chercher tout les elements dans la table "client" qui on comme id = userId
      const user = await Client.findByPk(userId);
      // si l'utilisateur n'existe pas 
      if (!user) {
          return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      // response 200 avec les element du user
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    // recuper l'id du user que je veux mettre a un jour dans le lien 
      const userId = req.params.id;
      // recup du front-end a mettre un jour
      const { first_name, last_name, email, phone_number, address, birth_date } = req.body;
      // chercher tout les elements dans la table "client" qui a comme id = userId
      const user = await Client.findByPk(userId);
      // si l'utilisateur n'existe pas 
      if (!user) {
          return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      user.first_name = first_name;
      user.last_name = last_name;
      user.email = email;
      user.phone_number = phone_number;
      user.address = address;
      user.birth_date = birth_date;

      // enregistrer dans la bdd
      await user.save();
      // renvoie reponse 200 avec les elements du user
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
      // recuper l'id du user dans le lien de la requette
      const userId = req.params.id;
      // chercher tout les elements dans la table "client" qui on comme id = userId
      const user = await Client.findByPk(userId);
      // si l'utilisateur n'existe pas 
      if (!user) {
          return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      // si l'utilisateur existe "delete User" 
      await user.destroy();
      // envoie de reposne "200" sinn "500"
      res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
  register,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
