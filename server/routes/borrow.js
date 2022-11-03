const express = require("express");
const router = express.Router();
// import
const {
  getAllbook,
  getAllBorrowedbook,
  createboorow,
  updateBorrowbook,
  DeleteBorrowBook,
} = require("../controler/borrow");

// fetching user data
router.get("/getAllBook", getAllbook);
router.post("/borrow/create", createboorow);

// updating the user
router.patch("/borrow/book/:id", updateBorrowbook);

// delete method
router.delete("/borrow/delete/:id", DeleteBorrowBook);
//  exp
module.exports = router;
