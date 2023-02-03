// Константы для темплейта и секции Elements
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element'); // Находим темплейт, присваиваем ему карточку
const elementsBlock = document.querySelector('.elements'); // Находим секцию elements

// Константы для формы редактирования
const popupEdit = document.querySelector('.popup_type_edit'); // Находим окно формы редактирования
const popupOpenEditBtn = document.querySelector('.profile__edit-btn'); // Кнопка «редактировать»
const formEdit = document.querySelector('.form_type_edit'); // находим форму редактирования профиля
const inputName = document.querySelector('.popup__input_profile_name'); // Инпут ФИО
const inputAbout = document.querySelector('.popup__input_profile_about'); // Инпут Должность
const profileName = document.querySelector('.profile__name'); // ФИО юзера
const profileJob = document.querySelector('.profile__job'); // Должность юзера

// Константы для добавления места
const popupAdd = document.querySelector('.popup_type_add');
const formAdd = document.querySelector('.form_type_add');
const elementInputName = document.querySelector('.popup__input_place_name');
const elementInputLink = document.querySelector('.popup__input_place_link');
const elementBtnAdd = document.querySelector('.profile__add-btn');

// Константа для закрытия попапа
const closeBtns = document.querySelectorAll('.popup__close');

// Ищем родителя крестика и вызываем функцию закрытия попапа по родителю крестика
closeBtns.forEach(btn => {
	btn.addEventListener('click', (evt) => {
		popupClose(evt.target.closest('.popup'));
	});
})

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
	elementBtnTrash.addEventListener('click', () => elementCard.remove()); // Слушатель для иконки корзины + Стрелочная функция "удаление карточки"
	elementBtnLike.addEventListener('click', () => elementBtnLike.classList.toggle('element__btn-like_active')); // Слушатель для иконки лайка + Стрелочная функция лайк/дизлайк 
	// картинка 
	return elementCard;
};

// Функция для открытия попапа
const popupOpen = function(popupName) {
	popupName.classList.add('popup_opened');
};

// Функция для закрытия попапа
const popupClose = function(popupName) {
	popupName.classList.remove('popup_opened');
};

// Рендер карточки
function renderElement(card) {
	elementsBlock.prepend(createElement(card)); // Добаваляем методом prepend карточку
};

// Рендер начального массива
	initialCards.forEach(item => renderElement(item)); // Перебираем методом forEach начальный массив

popupOpenEditBtn.addEventListener('click', () => {
	popupOpen(popupEdit);
	inputName.value = profileName.textContent;
	inputAbout.value = profileJob.textContent;
}); // Слушатель для кнопки открытия попапа


formEdit.addEventListener('submit', handleFormSubmitEdit); // Слушатель для кнопки «сохранить»

elementBtnAdd.addEventListener('click', () => { // Слушатель на иконку плюса
	popupOpen(popupAdd);
});

formAdd.addEventListener('submit', handleFormSubmitAdd); // Слушатель сабмита на форму добавления

// Функция для отправки формы
function handleFormSubmitEdit(evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value;
	profileJob.textContent = inputAbout.value;
	popupClose(popupEdit); // Функция в функции - закрывает попап при нажатии на кнопку «Сохранить»
};

// Функция для добавления места
function handleFormSubmitAdd(evt) {
	evt.preventDefault();
	const obj = {};
	obj.name = elementInputName.value
	obj.link = elementInputLink.value
	// createElement(obj);
	renderElement(obj);
	popupClose(popupAdd);
};















