const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    // this.author = author;
    // this.pages = pages;
    // this.read = read;
}

const bookList = document.querySelector(".booklist");
const form = document.querySelector(".form");

form.addEventListener(("submit"), () => {

    const formData = new FormData(form);
    for (const [key, value] of formData) {
        console.log(`${key}: ${value}`);
    }
})

function addBookToLibrary(Book) {
    bookList.textContent += Book.name;
    myLibrary.push(Book);
}