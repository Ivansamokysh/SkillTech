// Знаходимо елементи з вашого HTML
const shopBtn = document.querySelector('.shop-btn');
const freelanceBtn = document.querySelector('.freelance-btn');

const shopPage = document.querySelector('.shop-page');
const freelancePage = document.querySelector('.freelance-page');



// За замовчуванням робимо Магазин активним
shopBtn.classList.add('active');
shopPage.classList.add('active');

// Клік на кнопку "Магазин"
shopBtn.addEventListener('click', () => {
    // Перемикаємо кнопки
    shopBtn.classList.add('active');
    freelanceBtn.classList.remove('active');

    // Перемикаємо сторінки
    shopPage.classList.add('active');
    freelancePage.classList.remove('active');
});

// Клік на кнопку "Фріланс"
freelanceBtn.addEventListener('click', () => {
    // Перемикаємо кнопки
    freelanceBtn.classList.add('active');
    shopBtn.classList.remove('active');

    // Перемикаємо сторінки
    freelancePage.classList.add('active');
    shopPage.classList.remove('active');
});