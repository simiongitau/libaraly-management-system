const express = require("express");
const router = express.Router();
// import
const {
  getAllUser,
  login,
  createUser,
  updateUser,
  DeleteUser,
  getAlladmin,
} = require("../controler/register");

// fetching user data
router.get("/user", getAllUser);
router.get("/user/admin", getAlladmin);
// ftching one user
router.post("/user/login", login);
// user
router.post("/user", createUser);

// updating the user
router.patch("/user/update/:id", updateUser);

// delete method
router.delete("/user/delete/:id", DeleteUser);
//  exp
module.exports = router;
