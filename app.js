const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors')
const authRouter = require('./routes/auth');

const BookController = require('./controllers/bookController');

mongoose.connect('mongodb://127.0.0.1:27017/library', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: true}));

//importing routes
//const bookRouter = require("./routes/books");

app.get('/', async (req, res) => {
    const books = await BookController.seeAllBooks();
    res.json(books);
});

//app.use("/books", bookRouter);

app.delete('/:title', async (req, res) => {
    console.log(req.params.title)
    await BookController.deleteBook(req.params.title);
    res.redirect(301, '/');
});

app.use("/auth", authRouter);

app.all(/.*/, (req, res) => {
    res.statusCode = 404;
    res.send("Page not Found");
})

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})