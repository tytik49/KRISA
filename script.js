let score = 0;

// Функция для увеличения счета
function increaseScore() {
    score++;
    document.getElementById('score').innerText = score;
}

// Слушаем клик по хомяку
document.getElementById('hamster').addEventListener('click', increaseScore);

// Функция для отображения карточек
function showMiningCards() {
    const cardsContainer = document.getElementById('mining-cards');
    cardsContainer.innerHTML = ''; // Очищаем предыдущие карточки
    // Пример карточек
    for (let i = 1; i <= 3; i++) {
        const card = document.createElement('div');
        card.innerText = `Карточка ${i} - цена: 10 монет`;
        card.classList.add('card');
        cardsContainer.appendChild(card);
    }
    cardsContainer.style.display = 'block'; // Показываем карточки
}

// Обработчик для кнопки майнинга
document.getElementById('mining-button').addEventListener('click', showMiningCards);
