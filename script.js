// Получаем кнопки
let yesButton = document.querySelector(".yes");
let noButton = document.querySelector(".no");

// Размер кнопки "Да"
let yesSize = 16;

// Когда наводишь на "Нет", "Да" увеличивается
noButton.addEventListener("mouseover", () => {
    yesSize += 10;
    yesButton.style.fontSize = yesSize + "px";
    yesButton.style.padding = (yesSize / 2) + "px " + (yesSize * 1.5) + "px";
});

// При нажатии на "Да"
yesButton.addEventListener("click", () => {
    document.body.innerHTML = `
        <div class="container">
            <h1>Yay! 💖 You're my Valentine! 🎉</h1>
            <img src="heart.png" alt="Heart" style="width: 100px;">
        </div>
    `;
});

// При нажатии на "Нет"
noButton.addEventListener("click", () => {
    alert("You can't say no! 😈");
});
