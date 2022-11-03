const Book = require("../model/book");
exports.getBooks = async (req, res) => {
  // find is used to retrive or fertch data from the mongo db
  const book = await Book.find();
  if (!book) {
    return res.status(404).json({
      success: false,
      message: "book does not exist",
    });
  }
  return res.json({ success: true, book });
};
// updating

exports.updateBooks = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    // condition if use exist
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "book does not exist",
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
// deliting

exports.DeleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "book does not exist",
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
exports.createBook = async (req, res) => {
  const data = req.body;
  console.log(data);
  // const {name,url,location,country} = req.body;
  try {
    const book = new Book(data);
    console.log(book);
    await book.save();
    return res.status(200).json({ success: true, book });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};
