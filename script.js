let cardsQuantity;

let cardsFront = [];

let flippedCards = [];

let cards = [
    `<div class="card" id="card0" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card1" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card2" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card3" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card4" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card5" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card6" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card7" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card8" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card9" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card10" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card11" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card12" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`, 
    `<div class="card" id="card13" onclick="flipCard(this);">
        <div class="face back"></div>
        <div class="face front"></div>
    </div>`
]

function loadPage () {
    alert("Hello, welcome to the Parrot Card Game!");

    validateCards();
}

function validateCards () {


    while ((cardsQuantity % 2 !== 0) || (cardsQuantity < 4) || (cardsQuantity > 14)) {

        cardsQuantity = Number(prompt("Please, type the number of cards you want to play with (between 4 and 14)."));
    }

    distributeCards();
}

function sortCards() { 
	return Math.random() - 0.5; 
}

function distributeCards () { 

    flippedCards = [];
    
    for (let i = 0; i < cardsQuantity; i++) {
        const gif = {
            src: "gifs/" + i + ".gif",
            id: i
        };
        cardsFront.push(gif);
    }

    cardsFront.sort(sortCards);

    const frontFaces = document.getElementsByClassName("front");

    const row1 = document.querySelector(".row.first");
    const row2 = document.querySelector(".row.second");
    const row3 = document.querySelector(".row.third");

    row1.innerHTML = "";
    row2.innerHTML = "";
    row3.innerHTML = "";

    if ((cardsQuantity >= 4) && (cardsQuantity <= 6)) {

        for (let i = 0; i < cardsQuantity; i++) {
        
            row1.innerHTML += cards[i];
            frontFaces[i].style.backgroundImage = "url('"+ cardsFront[i].src + "')";           
        }       
    }

    if ((cardsQuantity >= 7) && (cardsQuantity <= 12)) {

        row1.innerHTML += cards[0] + cards[1] + cards[2] + cards[3] + cards[4] + cards[5];
        frontFaces[0].style.backgroundImage = "url('"+ cardsFront[0].src + "')";     
        frontFaces[1].style.backgroundImage = "url('"+ cardsFront[1].src + "')"; 
        frontFaces[2].style.backgroundImage = "url('"+ cardsFront[2].src + "')"; 
        frontFaces[3].style.backgroundImage = "url('"+ cardsFront[3].src + "')"; 
        frontFaces[4].style.backgroundImage = "url('"+ cardsFront[4].src + "')"; 
        frontFaces[5].style.backgroundImage = "url('"+ cardsFront[5].src + "')"; 

        for (let i = 6; i < cardsQuantity ; i++) {
            
            row2.innerHTML += cards[i];
            frontFaces[i].style.backgroundImage = "url('"+ cardsFront[i].src + "')";     
        }
    }

    if (cardsQuantity > 12) {

        row1.innerHTML += cards[0] + cards[1] + cards[2] + cards[3] + cards[4] + cards[5];
        frontFaces[0].style.backgroundImage = "url('"+ cardsFront[0].src + "')";     
        frontFaces[1].style.backgroundImage = "url('"+ cardsFront[1].src + "')"; 
        frontFaces[2].style.backgroundImage = "url('"+ cardsFront[2].src + "')"; 
        frontFaces[3].style.backgroundImage = "url('"+ cardsFront[3].src + "')"; 
        frontFaces[4].style.backgroundImage = "url('"+ cardsFront[4].src + "')"; 
        frontFaces[5].style.backgroundImage = "url('"+ cardsFront[5].src + "')"; 

        row2.innerHTML += cards[6] + cards[7] + cards[8] + cards[9] + cards[10] + cards[11];
        frontFaces[6].style.backgroundImage = "url('"+ cardsFront[6].src + "')";     
        frontFaces[7].style.backgroundImage = "url('"+ cardsFront[7].src + "')"; 
        frontFaces[8].style.backgroundImage = "url('"+ cardsFront[8].src + "')"; 
        frontFaces[9].style.backgroundImage = "url('"+ cardsFront[9].src + "')"; 
        frontFaces[10].style.backgroundImage = "url('"+ cardsFront[10].src + "')"; 
        frontFaces[11].style.backgroundImage = "url('"+ cardsFront[11].src + "')"; 

        for (let i = 12; i < cardsQuantity ; i++) {
            
            row3.innerHTML += cards[i];
            frontFaces[i].style.backgroundImage = "url('"+ cardsFront[i].src + "')";    
        }
    } 
}

function flipCard (selectedCard) {

    if(flippedCards.length < 2){
        const faces = selectedCard.getElementsByClassName('face');

        faces[0].classList.toggle('flipped');
        faces[1].classList.toggle('flipped');

        flippedCards.push(selectedCard);
        
    } else {
        flippedCards[0].childNodes[1].classList.toggle("flipped");
        flippedCards[0].childNodes[3].classList.toggle("flipped");
        flippedCards[1].childNodes[1].classList.toggle("flipped");
        flippedCards[1].childNodes[3].classList.toggle("flipped");

        flippedCards = [];
    } 
}

loadPage();