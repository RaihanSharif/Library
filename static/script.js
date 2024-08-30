const lotr = {
    title: "Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 600,
    isRead: false,
}

const mokingBird = {
    title: "To Kill a MockingBird",
    author: "Harper Lee",
    pages: 5000,
    isRead: false,
}

const shinning = {
    title: "The Shining",
    author: "Stephen King",
    pages: 300,
    isRead: true,
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




const tableBody = document.querySelector(".books-table-body");
function updateTable() {
    while (tableBody.hasChildNodes()) {
        tableBody.removeChild(tableBody.lastChild);
    }
    let tableRow = document.createElement("tr");

    for (let i = 0; i < myLibrary.length; i++) {
        tableRow = document.createElement("tr");
        const book = myLibrary[i];

        const title = document.createElement("td");
        title.textContent = book["title"];
        
        const author = document.createElement("td");
        author.textContent = book["author"];
        
        const pages = document.createElement("td");
        pages.textContent = book["pages"];
        
        const read = document.createElement("td");
        read.textContent = book["isRead"];

        const toggle_read = document.createElement("button");
        toggle_read.textContent = "toggle";
        read.appendChild(toggle_read);

        const delBook = document.createElement("button");
        delBook.textContent = "delete";
        delBook.setAttribute('data', `del: ${i}`);
        delBook.className = "delete-book";
        delBook.onclick = () => {
            delFromLibrary(delBook.dataset.del);
        }
        
        tableRow.appendChild(title);
        tableRow.appendChild(author);
        tableRow.appendChild(pages);
        tableRow.appendChild(read);
        tableRow.appendChild(delBook);


        tableBody.appendChild(tableRow);
    }
}

updateTable()

function delFromLibrary(index) {
    console.log(`before`, myLibrary);
    myLibrary.splice(index, 1);
    updateTable();
    console.log(`after`, myLibrary);
}

