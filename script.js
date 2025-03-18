// Posibles valores de la carta
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♥", "♦", "♠", "♣"]; // Corazones, Diamantes, Picas, Tréboles
const suitClasses = ["heart", "diamond", "spade", "club"];

// Función para generar una nueva carta
function generateCard() {
    const card = document.getElementById("card");
    const number = document.querySelector(".number");
    const suitTop = document.querySelector(".suit.top");
    const suitBottom = document.querySelector(".suit.bottom");

    // Seleccionar aleatoriamente número y palo
    let randomValue = values[Math.floor(Math.random() * values.length)];
    let randomSuitIndex = Math.floor(Math.random() * suits.length);
    let randomSuit = suits[randomSuitIndex];
    let randomClass = suitClasses[randomSuitIndex];

    // dar valores a la carta
    number.textContent = randomValue;
    suitTop.textContent = randomSuit;
    suitBottom.textContent = randomSuit;

    // Remover clases previas y agregar la nueva clase d
    card.classList.remove(...suitClasses);
    card.classList.add(randomClass);
}

// Botón para generar nueva carta
document.getElementById("newCard").addEventListener("click", generateCard);

// Temporizador 
setInterval(generateCard, 10000);

// Funcionalidad para cambiar tamaño de la carta
document.getElementById("resizeCard").addEventListener("click", () => {
    const width = document.getElementById("width").value || 150;
    const height = document.getElementById("height").value || 200;
    const card = document.getElementById("card");

    card.style.width = `${width}px`;
    card.style.height = `${height}px`;
});

// Generar la primera carta al cargar la página
window.onload = generateCard;