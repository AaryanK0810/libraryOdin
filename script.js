const library = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const read = document.getElementById("read");
const dialog = document.getElementById('formPopup');
const openPopup = document.getElementById('addBook');
const closePopup = document.getElementById('close-btn');
const submit = document.getElementById('submit');
const image = document.getElementById('image');

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

//Book Constructor
function Book(title , author , pages , read)
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
function addBookToLibrary()
{
    const createBook = new Book(
        title.value , author.value , pages.value , read.checked
    );
    library.push(createBook);
    console.log('Book added to library');
    displayBooks();
}

//Display books

function displayBooks()
{
    library.forEach((book) => {
        console.log(book.info());
    })
}

//Reset the form
function resetForm()
{
    this.title = '';
    this.author = '';
    this.pages = '';
    this.read = false;
    this.image = '';
}