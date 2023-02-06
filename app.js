let myLibrary  = {};

function Book(title, author, pages, read){
    //
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;  
}



// creating a function that adds a book to the library
function addBookToLibrary(book)
{

    myLibrary[book.title] = book;
}

// A function that removes a book from the library

function removeFromLibrary(book){
    delete myLibrary[book]
}

