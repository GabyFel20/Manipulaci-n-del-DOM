const CARDS_CONTAINER =document.querySelector("#card-container");

//Crear tarjeta 
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
//Crear seccciones  
function CreateElements () {
    const cardObj = { 
        name_section: document.Element("h3"),
        desc_section:document.Element("p)"),
        age_section: document.createElement("p"),
        book_section:document.createElement("div"), 
    };
    return cardObj;
};
console.log(USER);
//Lista 

//Crear tarjeta 
//Inyectamos info 
function InjectData (obj){
    const booklist = USER.fav_books.books.map((e) => { 
        const item = document.createElement("ul"); 
        item.textContent = e; 
        return item; 
    })
    obj.name_section.textContent = USER.username; 
    obj.desc_section.textContent = USER.desc;
    obj.age_section.textContent = USER.age; 
    obj.book_section.append(...booklist);
};

function RenderCard (cardObj) { 
const card = document.createElement("div"); 
card.append(cardObj.name_section, 
    cardObj.desc_section, 
    cardObj_agesection, 
    cardObj_booksection
);
    CARDS_CONTAINER.appendChild(card); 
};

const cardData = CreateElements(); 
InjectData(cardData);