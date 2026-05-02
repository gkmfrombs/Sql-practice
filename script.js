let allCards = [];
let currentCards = [];
let currentIndex = 0;

// Load JSON
fetch('./sql-questions.json')
    .then(res => res.json())
    .then(data => {
        allCards = data;
        currentCards = [...allCards];
        updateUI();
    });

function updateUI() {
    if (currentCards.length === 0) return;
    
    // Ensure card is face up when navigating
    document.getElementById("flashcard").classList.remove("flipped");

    // Update Counter
    document.getElementById("questionCount").innerText = `Q: ${currentIndex + 1} / ${currentCards.length}`;

    // Update Text
    document.getElementById("questionText").innerText = currentCards[currentIndex].question;
    document.getElementById("answerText").innerText = currentCards[currentIndex].answer;
}

function flipCard() {
    document.getElementById("flashcard").classList.toggle("flipped");
}

function nextCard() {
    if (currentIndex < currentCards.length - 1) {
        currentIndex++;
        updateUI();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateUI();
    }
}

function shuffleCards() {
    currentCards.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    updateUI();
}

function filterCategory() {
    let category = document.getElementById("category").value;
    
    if (category === "all") {
        currentCards = [...allCards];
    } else {
        currentCards = allCards.filter(card => card.category === category);
    }
    
    currentIndex = 0;
    updateUI();
}