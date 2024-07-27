const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    addBookToLibrary(this);
}
  
function addBookToLibrary(Book) {
    myLibrary.push(Book);
}