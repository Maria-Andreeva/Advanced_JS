// Задание 2. Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения. 
// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.
// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.
// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их. Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            { id: "1", text: "Отличный телефон! Батарея держится долго." },
            { id: "2", text: "Камера супер, фото выглядят просто потрясающе."},
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [ { id: "3", text: "Интересный дизайн, но дорогой." }, ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [ { id: "4", text: "Люблю играть на PS5, графика на высоте." }, ],
    },
];

const comment = document.querySelector('.comment');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const reviewsContainer = document.querySelector('.reviews');

function addReview(reviewText) {
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    reviewDiv.textContent = reviewText;
    reviewsContainer.appendChild(reviewDiv);
}

function loadInitialReviews() {
    initialData.forEach(product => {
        product.reviews.forEach(review => {
            addReview(`${product.product}: ${review.text}`);
        });
    });
}

btn.addEventListener('click', function() {
    try {
        const reviewText = text.value.trim();
        if (reviewText.length < 50 || reviewText.length > 500) {
            throw new Error("Отзыв должен быть от 50 до 500 символов.");
        }
        addReview(reviewText);
        comment.textContent = "Ваш отзыв успешно добавлен!";
        text.value = "";
    } catch (error) {
        comment.textContent = error.message;
    }
});

loadInitialReviews();