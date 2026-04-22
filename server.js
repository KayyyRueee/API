const express = require("express")
const app = express();
app.use(express.json());
let books = [];

app.post("/books", (req, res) => {
    const book = {
        id: Date.now(),
        book_name: req.body.book_name,
        author: req.body.author,
        publisher: req.body.publisher
    };
    books.push(book);
    res.status(201).json(book);
});

app.get("/books", (req, res) => {
    res.json(books);
});

app.get("/books/:id", (req, req) => {
    const book = books.find(b => b.id == req.params.id);
    res.json(book || {message: "Not Found"});
});

app.put("/books/id", (req, res) => {
    books = books.map(b =>
        b.id == req.params.id ? {...b, ...req.body } : b);
        res.json({message: "Updated"});
});

app.delete("/books/:id", (req, res) => {
    books = books.filter(b => b.id != req.params.id);
    res.json({ message: "Delted"});
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

