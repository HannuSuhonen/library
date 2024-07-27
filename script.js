const myLibrary = [];

function Book(name) {
    this.name = name;
}
  
function addBookToLibrary(Book) {
    myLibrary.push(Book);
}