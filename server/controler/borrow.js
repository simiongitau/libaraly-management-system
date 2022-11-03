const Borrow = require("../model/borrow");
exports.getAllbook = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const borrow = await Borrow.find({ role: "user" });
  if (!borrow) {
    return res.status(404).json({
      success: false,
      message: "book does not exist",
    });
  }
  return res.json({ success: true, borrow });
};
// getting all the admin
exports.getAllBorrowedbook = async (req, res) => {
  // find is used to retrive or fetch data from the mongo db
  const borrow = await Register.find({ role: "admin" });
  if (!borrow) {
    return res.status(404).json({
      success: false,
      message: "book does not exist",
    });
  }
  return res.json({ success: true, borrow });
};

exports.createboorow = async (req, res) => {
  try {
    const borrow = new Borrow(req.body);
    console.log(borrow);
    await borrow.save();
    return res.status(200).json({ success: true, borrow });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

exports.updateBorrowbook = async (req, res) => {
  try {
    const book = await Borrow.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exist
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "deliverly does not exist",
      });
    }
    return res.json({ success: true, book });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
exports.DeleteBorrowBook = async (req, res) => {
  try {
    const borrow = await Borrow.findByIdAndDelete(req.params.id);
    if (!borrow) {
      return res.status(404).json({
        success: false,
        message: "user does not exist",
      });
    }
    return res.json({ success: true, borrow });
  } catch (error) {
    return res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};
