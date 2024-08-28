const images = [
    "image1.png", "image1.png",
    "image2.png", "image2.png",
    "image3.png", "image3.png",
    "image4.png", "image4.png",
    "image5.png", "image5.png",
    "image6.png", "image6.png",
    "image7.png", "image7.png",
    "image8.png", "image8.png"
];

let shuffledImages = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchCount = 0;
let timer = null;

document.addEventListener("DOMContentLoaded", () => {
    resetGame();
    document.getElementById('resetButton').addEventListener('click', resetGame);
});

function shuffleImages() {
    shuffledImages = [...images].sort(() => Math.random() - 0.5);
}

function createBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = '';

    shuffledImages.forEach((img, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.image = img;
        card.dataset.index = index;

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front"></div>
                <div class="card-back" style="background-image: url('${img}');"></div>
            </div>
        `;

        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!firstCard) {
        firstCard = this;
        startFlipTimer();
        return;
    }

    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.image === secondCard.dataset.image;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
    matchCount++;

    if (matchCount === images.length / 2) {
        document.getElementById('message').textContent = "Congratulations! You won!";
        clearTimeout(timer);
    }
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function startFlipTimer() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        firstCard.classList.remove("flip");
        resetBoard();
    }, 5000);
}

function resetGame() {
    shuffleImages();
    createBoard();
    document.getElementById('message').textContent = '';
    matchCount = 0;
    clearTimeout(timer);
}
