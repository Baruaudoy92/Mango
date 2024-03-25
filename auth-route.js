const {Router}=require("express")
const authController=require("../controllers/auth-controller")
const router=Router()

// Register and Login routes
router.post("/register", authController.register);
router.post("/login", authController.login);

// CRUD routes
router.get("/allusers", authController.getAllUsers);
router.get("/users/:id", authController.getUserById);
router.put("/users/:id", authController.updateUser);
router.delete("/users/:id", authController.deleteUser);

module.exports=router;