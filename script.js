const library = [];
const dialog = document.getElementById('formPopup');
const openPopup = document.getElementById('addBook');

openPopup.addEventListener('click' , () => {
    dialog.showModal();
})
function Book(title , author , pages , read)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function()
    {
       return `{this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}

function addBookToLibrary()
{
    const createBook = new Book(title.value , author.value , pages.value , read.checked);
    library.push(createBook);
}

function displayBooks()
{
    library.forEach((book) => {
        console.log(book.info());
    })
}