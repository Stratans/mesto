const elementTemplate = document.querySelector('#element-template').content.querySelector('.element'); // Находим темплейт, присваиваем ему карточку
const elementsBlock = document.querySelector('.elements'); // Находим 

// Функция создания карточки
function createElement(item) {
	const elementCard = elementTemplate.cloneNode(true); // клонируем темплейт
	const elementCardName = elementCard.querySelector('.element__title'); // переменная заголовок карточки
	const elementCardImg = elementCard.querySelector('.element__img'); // переменная картинку карточки
	const elementBtnTrash = elementCard.querySelector('.element__btn-trash'); // переменная иконка корзины
	const elementBtnLike = elementCard.querySelector('.element__btn-like'); // переменная иконка лайка
	elementCardName.textContent = item.name; // предоставляем доступ к тексту внутри элемента
	elementCardImg.src = item.link; // берем атрибут src
	elementCardImg.alt = item.name; // берем атрибут alt
	elementBtnTrash.addEventListener('click', () => elementCard.remove()); // Слушатель для иконки корзины
	elementBtnLike.addEventListener('click', () => elementBtnLike.classList.toggle('element__btn-like_active')); // Слушатель для иконки лайка
	return elementCard;
};

// Рендер карточки
function renderElement(card) {
	elementsBlock.prepend(createElement(card)); // Добаваляем методом prepend карточку
};

// Рендер начального массива
	initialCards.forEach(item => renderElement(item)); // Перебираем методом forEach начальный массив






















// Объявляем переменные
const popup = document.querySelector('.popup'); // Окно попапа
const popupOpenBtn = document.querySelector('.profile__edit-btn'); // Кнопка «редактировать»
const popupCloseBtn = document.querySelector('.popup__close'); // Кнопка «закрыть»
const popupForm = document.querySelector('.popup__form'); // Форма попапа
const inputName = document.querySelector('.popup__input_type_name'); // Инпут ФИО
const inputAbout = document.querySelector('.popup__input_type_about'); // Инпут Должность
const profileName = document.querySelector('.profile__name'); // ФИО юзера
const profileJob = document.querySelector('.profile__job'); // Должность юзера

// Функция для открытия попапа
let popupOpen = function() {
	popup.classList.add('popup_opened');
	inputName.value = profileName.textContent;
	inputAbout.value = profileJob.textContent;
}

// Функция для закрытия попапа
let popupClose = function() {
	popup.classList.remove('popup_opened');
}

// Функция для отправки формы
function handleFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value;
	profileJob.textContent = inputAbout.value;
	popupClose(); // Функция в функции - закрывает попап при нажатии на кнопку «Сохранить»
}

// Навешиваем слушателей
popupOpenBtn.addEventListener('click', popupOpen); // Слушатель для кнопки открытия попапа
popupCloseBtn.addEventListener('click', popupClose); // Слушатель для кнопки закрытия попапа
popupForm.addEventListener('submit', handleFormSubmit); // Слушатель для кнопки «сохранить»
