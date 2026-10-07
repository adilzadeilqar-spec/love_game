/*
    Логика мини-игры.

    Кнопка "Аксана ? Илгар" при наведении
    перемещается в случайное место экрана,
    поэтому нажать её практически невозможно.

    Кнопка "Илгар ? Аксана" показывает победное сообщение.
*/

// Получаем кнопку, которую будем заставлять убегать.
const runawayButton = document.getElementById("runawayButton");

// Получаем правильную кнопку.
const correctButton = document.getElementById("correctButton");

// Получаем элемент, в котором будем показывать результат.
const result = document.getElementById("result");

// Обрабатываем наведение курсора на убегающую кнопку.
runawayButton.addEventListener("mouseenter", () => {

    // Получаем ширину окна браузера.
    const screenWidth = window.innerWidth;

    // Получаем высоту окна браузера.
    const screenHeight = window.innerHeight;

    // Получаем размеры кнопки.
    const buttonWidth = runawayButton.offsetWidth;
    const buttonHeight = runawayButton.offsetHeight;

    // Рассчитываем случайную координату X.
    const randomX = Math.random() * (screenWidth - buttonWidth);

    // Рассчитываем случайную координату Y.
    const randomY = Math.random() * (screenHeight - buttonHeight);

    // Переводим кнопку в абсолютное положение.
    runawayButton.style.position = "fixed";

    // Перемещаем кнопку по горизонтали.
    runawayButton.style.left = `${randomX}px`;

    // Перемещаем кнопку по вертикали.
    runawayButton.style.top = `${randomY}px`;
});

// Обрабатываем нажатие правильной кнопки.
correctButton.addEventListener("click", () => {

    // Показываем сообщение.
    result.textContent = "Конечно, Илгар!!!";

    // Немного увеличиваем кнопку.
    correctButton.style.transform = "scale(1.15)";
});




