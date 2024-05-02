const CARDS_CONTAINER =document.querySelector("#card-container");


const USER = { 
    id: 1,
    username: "User Name",
    desc:"Sobre mí", 
    age: 23,
    fav_books: { 
        books: [
            "Brida",
            "Ensayo sobre la ceguera",
            "La mecánica del corazón", 
            "Angeles y Demonios", 
            "El principito",
        ],        
    }, 
};
function createElements(){
    const cardObj = {
        name_section: document.createElement("h3"),
        desc_section: document.createElement("p"),
        age_section: document.createElement("p"),
        book_section: document.createElement("div"),
    };

    return cardObj; 
}


function injectData(obj) {
    const bookList= USER.fav_books.books.map((e)=>{
        const item=document.createElement("ul");
        item .textContent=e;
        return item;
     });

    obj.name_section.textContent = USER.username; 
    obj.desc_section.textContent = USER.desc;
    obj.age_section.textContent  = USER.age; 
    obj.book_section.append(...bookList);
    renderCard(obj);
}


function renderCard(cardObj) {
    const card= document.createElement("div");
    card.append(
        cardObj.name_section, 
        cardObj.desc_section, 
        cardObj.age_section, 
        cardObj.book_section
    );
    CARDS_CONTAINER.appendChild(card);
}

const cardData = createElements();
injectData(cardData);
























