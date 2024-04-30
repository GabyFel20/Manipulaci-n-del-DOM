const IDENTITY_CONTAINER = document.querySelector("#identity-container");
const USER ={
    id:1,
    username: 'BookLover123',
    desc: 'Avid reader and coffe entusiast',
    age: 29,
    fav_books:{
        books: ["To kill a Mockingbird",
        "1984",
        "Pride and prejudice"],
    },
};

const identity= document.createElement("div");
const name_section = document. createElement ("h3");
const desc_section = document. createElement ("p");
const age_section = document.createElement ("p");
const book_section = document.createElement("div");
//lista----------------------------------------
const bookList = USER.fav_books.books.map((e)=> {
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
});

console.log(bookList);


name_section.textContent = USER.username;
desc_section.textContent = USER.desc;
age_section.textContent = USER.age;
book_section.append(...bookList);
identity.append(name_section, desc_section, age_section, book_section);


IDENTITY_CONTAINER.appendChild(identity);