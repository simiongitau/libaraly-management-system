const express = require("express");
const router = express.Router();
// import
const {
  getBooks,
  updateBooks,
  DeleteBook,
  createBook,
} = require("../controler/book");

// fetching user data
router.get("/book", getBooks);
router.post("/create/book", createBook);
// updating the user
router.patch("/book/update/:id", updateBooks);

// delete method
router.delete("/book/delete/:id", DeleteBook);
//  exp
module.exports = router;
