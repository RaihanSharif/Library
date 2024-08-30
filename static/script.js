const lotr = {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 600,
    read: false,
}

const mokingBird = {
    title: "To Kill a MockingBird",
    author: "Harper Lee",
    pages: 5000,
    read: false,
}

const shinning = {
    title: "The Shining",
    author: "Stephen King",
    pages: 300,
    read: true,
}

const myLibrary = [];
myLibrary.push(lotr);
myLibrary.push(mokingBird);
myLibrary.push(shinning);

function Book() {
  // the constructor...
}

// create new book with user input
function addBookToLibrary() {
    let newBook = new Book();
    myLibrary.push(newBook);
}



function updateTable() {
    const tableBody = document.querySelector(".books-table-body");
    let tableRow = document.createElement("tr");
    let td = document.createElement('td');

    for (let i = 0; i < myLibrary.length; i++) {
        tableRow = document.createElement("tr");
        const temp = myLibrary[i];

        for (let key in temp) {
            td = document.createElement("td");
            td.textContent = temp[key];
            tableRow.appendChild(td);
        }
        tableBody.appendChild(tableRow);
    }
}

updateTable()