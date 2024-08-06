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
form.addEventListener(("submit"), (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    addBookToLibrary(formData);
    form.reset();
})

function addBookToLibrary(formData) {
    const newBook = new Book(
    formData.get(KEYBOOKNAME),
    formData.get(KEYAUTHORNAME),
    formData.get(KEYPAGESCOUNT),
    formData.get(KEYREAD));

    myLibrary.push(newBook);
    createBookCardElements();
}

const booksContainer = document.querySelector(".booksContainer");

function createBookCardElements(){
    clearBookContainer();
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        Object.keys(book).forEach((key) => {
            const p = document.createElement("p");
            console.log(book[key]);
            p.textContent = `${key} : ${book[key]}`;
            bookCard.appendChild(p);
        })
        const statusButton = document.createElement("button");
        statusButton.textContent = "status";
        statusButton.onclick = () => book.updateStatus();
        bookCard.appendChild(statusButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener(("click"),() => deleteButtonClick(book))
        bookCard.appendChild(deleteButton);

        booksContainer.prepend(bookCard);
    })
}

function clearBookContainer() { 
    while(booksContainer.firstChild){
        booksContainer.removeChild(booksContainer.firstChild);
    }
} 

const dialog = document.querySelector("dialog");
const formOpenButton = document.querySelector(".openFormButton");
formOpenButton.addEventListener(("click"), () => {
    dialog.showModal();
})

const formSubmitButton = document.querySelector(".form-submit");
formSubmitButton.addEventListener(("click"), () => {
    if(form.checkValidity()) dialog.close();
})

function deleteButtonClick(book) {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    createBookCardElements();
}
Book.prototype.updateStatus = function(){
    switch (myLibrary[myLibrary.indexOf(this)].read){
        case "Unread": 
            this.read = "In-progress";
            break;
        case "In-progress":
            this.read = "Complete";
            break;
        case "Complete":
            this.read = "Unread";
            break;
    }
    createBookCardElements();
}