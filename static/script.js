const lotr = {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    description: "An epic journey through middle earth as \
    Hobbits, Elves, Dwarves, and Men form a fellowship in \
    order to battle the dark lord Sauron.",
    pages: 600,
    isCompleted: false,
}

const mockingBird = {
    title: "To Kill a MockingBird",
    author: "Harper Lee",
    description: "A harrowing depiction of racism in America \
    in the midst of the great depresson",
    pages: 5000,
    isCompleted: false,
}

const shining = {
    title: "The Shining",
    author: "Stephen King",
    description: "Man loses mind, tries to kill family",
    pages: 300,
    isCompleted: true,
}

const totalBooks = 0;
const completedBooks = 0;
const unreadBooks = totalBooks - completedBooks;

const myLibrary = [];
myLibrary.push(lotr);
myLibrary.push(mockingBird);
myLibrary.push(shining);

const addBookBtn = document.querySelector("#add-book-btn");
const dialog = document.querySelector("dialog");
const cancelBtn = dialog.querySelector("#cancel-btn");


function Book(title, author, description, pages, isCompleted) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.isCompleted = isCompleted;
}

addBookBtn.addEventListener("click", (event) => {
    dialog.showModal();
})

// can close form without filling in required fields of form
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})
/*
how to add a card to the grid:
1. take user input on click of add button
2. use modal and form, to collect data
3. store data in the form of a book.
4. put that book in library array
5. create card using that book
6. append that card to the card container as a child

when adding a new card, the delete button needs to
have a data field which is used to find the book in
the array.
*/

// may or may not be needed
function openModal() {

}

// may or maynot be needed
function closeModal() {
    // return data?
}

// called by the add book button
function getUserInput() {
    // open modal
    // validate modal data
    // close modal
}
function addBookToLibrary(book) {
    // let data = getuserInput()
    // let newBook = new Book(data);
    // myLibrary.push(newBook);

    // createCard(book)

    // test with dummy data
    // modal data gathering will be last step
}




function createCard(book) {
    const card = document.createElement("div");
    card.className = "card";

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
    isCompletedBtn.classname = "is-complete-btn";
    if (book["isCompleted"]) {
        isCompletedBtn.textContent = "Completed";
    } else {
        isCompletedBtn.textContent = "Not completed";
    }
    
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "delete";
    
    const buttons = document.createElement("div");
    buttons.className = 'card-buttons';

    buttons.appendChild(isCompletedBtn);
    buttons.appendChild(deleteBtn);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(description);
    card.appendChild(pages);
    card.appendChild(buttons);

    return card;
}

const cardContainer = document.getElementById("card-container");
cardContainer.appendChild(createCard(lotr));
cardContainer.appendChild(createCard(mockingBird));
cardContainer.appendChild(createCard(lotr));
cardContainer.appendChild(createCard(shining));
