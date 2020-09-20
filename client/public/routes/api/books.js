const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// router.route("/").get(booksController.findAll).post(booksController.create);

// Matches with "/api/books/:id"
// router.get("/allBooks", booksController.allBooks);
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);
let booksObj = {};
router.post("/api/books/add", function (req, res) {
  console.log(req.body);
});
router.get("/api/books/test", function (req, res) {
  console.log("test");
});

module.exports = router;
