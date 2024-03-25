const {Router}=require("express")
const mangasController=require("../controllers/mangas-controller")
const router=Router()

// CREATE A manga
router.post("/create", mangasController.createMangas);

// CRUD routes
router.get("/allmangas", mangasController.getAllMangas);
router.get("/mangas/:id", mangasController.getMangasById);
router.put("/mangas/:id", mangasController.updateMangas);
router.delete("/mangas/:id", mangasController.deleteMangas);

module.exports=router;