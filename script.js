// Получаем кнопки и элементы для текста
let yesButton = document.querySelector(".yes");
let noButton = document.querySelector(".no");
let messageElement = document.querySelector(".message");

// Массив с милыми фразами
let messages = [
    "Но я тебя очень люблю, ты моя малышка! 💖",
    "Не переживай, я все равно твой валентин! 💘",
    "Ты — самое лучшее, что случилось в моей жизни! 🌸",
    "Каждый день с тобой — это праздник! 🎉",
    "Ты прекрасна, даже если говоришь нет! 😘"
];

// Индекс для выбора фраз
let messageIndex = 0;

// При нажатии на "Да"
yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yay! 💖 You're my Valentine! 🎉</h1>
            <img src="images/heart.png" alt="Heart" style="width: 100px;">
        </div>
    `;
});

// При нажатии на "Нет"
noButton.addEventListener("click", () => {
    // Показываем следующую милую фразу
    if (messageIndex < messages.length) {
        messageElement.textContent = messages[messageIndex];
        messageIndex++;
    } else {
        messageElement.textContent = "Ты не можешь уйти! Я все равно буду тебя любить! 😍";
    }
});
