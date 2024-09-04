function Book(title, author, description, pages, isCompleted) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.isCompleted = isCompleted;
}

const lotr = new Book(
    "Lord of the Rings",
    "J.R.R. Tolkien",
    "An epic journey through middle earth as \
    Hobbits, Elves, Dwarves, and Men form a fellowship in \
    order to battle the dark lord Sauron.",
    600,
    false,
)

const mockingBird = new Book(
    "To Kill a MockingBird",
    "Harper Lee",
    "A harrowing depiction of racism in America \
    in the midst of the great depresson",
    5000,
    false,
)

const shining = new Book(
    "The Shining",
    "Stephen King",
    "Man loses mind, tries to kill family",
    300,
    true,
)

const theDeluge = new Book(
    "The Deluge",
    "Stephen Markley",
    "In the first decades of the 21st century, \
    the world is convulsing, its governments mired in \
    gridlock while a patient but unrelenting ecological \
    crisis looms. America is in upheaval, battered by \
    violent weather and extreme politics...",
    896,
    false,
)

const myLibrary = [];

let totalBooks = 0;
let completedBooks = 0;
let unreadBooks = totalBooks - completedBooks;

const addBookBtn = document.querySelector("#add-book-btn");
const dialog = document.querySelector("dialog");
const cancelBtn = dialog.querySelector("#cancel-btn");
const confirmBtn = dialog.querySelector("#confirm-btn");
const formToObject = form => Object.fromEntries(new FormData(form));
const cardContainer = document.getElementById("card-container");
const closeDialogBtn = dialog.querySelector("#close-dialog");
const form = dialog.querySelector("#add-book-form");

addBookBtn.addEventListener("click", () => {
    form.reset();    
    dialog.showModal();
})

// can close form without filling in required fields of form
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
});

// if a book with the same title and author already
// the array, then return true
// TODO: set all the title and author fields to lower case 
// before comparing
function isBookInLibrary(title, author) {
    const result = myLibrary.find((book) => 
        (book.title === title && book.author === author));
    return (result) ? true : false;
}

function toggleIsCompleted(book, button) {
    button.classList.toggle("completed");
    book["isCompleted"] = !book["isCompleted"];
    console.log(book["isCompleted"]);
    if (button.classList.contains("completed")) {
        button.textContent = "Completed";
    } else {
        button.textContent = "Not completed";
    }
}

function createCard(book, index) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.libraryIndex = index; // this doesn't work

    const title = document.createElement("h2");
    title.className = "title";
    title.textContent = book["title"];

    const author = document.createElement("p");
    author.className = "author";
    author.textContent = book["author"];

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = book["description"];

    const pages = document.createElement("span");
    pages.className = "pages";
    pages.textContent = `${book["pages"]} pages`;

    
    const isCompletedBtn = document.createElement("button");
    isCompletedBtn.classList = "is-complete-btn";
    isCompletedBtn.dataset.libraryIndex = index;
    if (book.isCompleted) {
        isCompletedBtn.classList.add("completed");
        isCompletedBtn.textContent = "Completed";
    } else {
        isCompletedBtn.textContent = "Not completed";
    }

    isCompletedBtn.addEventListener("click", () => {
        toggleIsCompleted(book, isCompletedBtn);
    })
    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "delete";
    deleteBtn.dataset.libraryIndex = index;
    
    const buttons = document.createElement("div");
    buttons.className = 'card-buttons';

    buttons.appendChild(isCompletedBtn);
    buttons.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(description);
    card.appendChild(pages);
    card.appendChild(buttons);

    card.addEventListener("click", (event) => {
        target = event.target;
        if (target.className === 'delete-btn') {
            removeBook(target.dataset.libraryIndex);
        }
    }); 
    return card;
}

function addBookToLibrary(book, index) {
    myLibrary.push(book);
    cardContainer.appendChild(createCard(book, index));
    console.log("lirbary length is: ", myLibrary,length);
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.lastChild);
    }
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i]);
        cardContainer.appendChild(createCard(myLibrary[i], i));
    }
}

confirmBtn.addEventListener("click", (e) => {
    const tempObj = formToObject(dialog.querySelector("#add-book-form"));
    if (isBookInLibrary(tempObj["title"], tempObj["author"])) {
        alert("this book already exists in the library");
    } else {
        const tempBook = new Book(tempObj["title"], tempObj["author"], 
            tempObj["description"], tempObj["pages"], false);
        
        tempBook["isCompleted"] = tempObj["is-completed"] ? true : false;
        console.log("lirbary length one  is: ", myLibrary,length);
        addBookToLibrary(tempBook, myLibrary.length);
    }
    dialog.close();
});

closeDialogBtn.addEventListener("click", () => {
    dialog.close();
})

addBookToLibrary(lotr, myLibrary.length);
addBookToLibrary(mockingBird, myLibrary.length);
addBookToLibrary(shining, myLibrary.length);
addBookToLibrary(theDeluge, myLibrary.length);
