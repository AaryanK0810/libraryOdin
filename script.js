const library = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const dialog = document.getElementById('formPopup');
const openPopup = document.getElementById('addBook');
const closePopup = document.getElementById('close-btn');
const submit = document.getElementById('submit');
const image = document.getElementById('image-chooser');
const libraryContainer = document.getElementById('libraryContainer');
const clear = document.getElementById('clearLibrary');

openPopup.addEventListener('click' , () => {
    dialog.showModal();
});

closePopup.addEventListener('click' , () => {
    dialog.close();
});

submit.addEventListener('click' , (e) => {
    e.preventDefault();
    addBookToLibrary();
    resetForm();
});

clear.addEventListener('click' , () => {
    resetForm();
    library.length = 0;
    displayBooks();
})

//Book Constructor
function Book(title , author , pages , read,image)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.image = image;
    this.info = function()
    {
       return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.read ? "read" : "not read yet"
}`;
    }
}

//Add book to Library
function addBookToLibrary() {

    const file = image.files[0];
    const imageURL = file
        ? URL.createObjectURL(file)
        : " ";

    const createBook = new Book(
        title.value,
        author.value,
        pages.value,
        read.checked,
        imageURL
    );

    library.push(createBook);
    displayBooks();
}

//Display books

function displayBooks()
{
    libraryContainer.innerHTML = '';
    library.forEach((book) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="${book.image}" alt="Book Cover" class="book-image">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? "Read" : "Not Read Yet"}</p>
            <button class = 'remove' onclick = 'removeBook(library.indexOf(Book))'>Remove Book</button>
        `;
        libraryContainer.appendChild(bookCard);
    })
}

function removeBook(index) {
    library.splice(index, 1);
    displayBooks();
}
//Reset the form
function resetForm()
{
   title.value = "";
author.value = "";
pages.value = "";
read.checked = false;
image.value = "";
}
