const myLibrary = [];
const KEYBOOKNAME = "bookName";
const KEYAUTHORNAME = "authorName";
const KEYPAGESCOUNT = "pagesCount";
const KEYREAD = "read";

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const form = document.querySelector(".form");
form.addEventListener(("submit"), () => {
    const formData = new FormData(form);
    addBookToLibrary(formData);
})

function addBookToLibrary(formData) {
    const newBook = new Book(
    formData.get(KEYBOOKNAME),
    formData.get(KEYAUTHORNAME),
    formData.get(KEYPAGESCOUNT),
    formData.get(KEYREAD));

    myLibrary.push(newBook);
    updateBookList(newBook);
}

const bookList = document.querySelector(".booklist");
function updateBookList(book){
    bookList.textContent += book;
}