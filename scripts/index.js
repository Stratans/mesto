// константы для темплейта и секции Elements
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element'); // находим темплейт, присваиваем ему карточку
const elementsBlock = document.querySelector('.elements'); // находим секцию elements
// константы для формы редактирования
const popupEdit = document.querySelector('.popup_type_edit'); // Находим окно формы редактирования
const popupOpenEditBtn = document.querySelector('.profile__edit-btn'); // Кнопка «редактировать»
const formEdit = document.querySelector('.popup__form_type_edit'); // находим форму редактирования профиля
const inputName = document.querySelector('.popup__input_profile_name'); // Инпут ФИО
const inputAbout = document.querySelector('.popup__input_profile_about'); // Инпут Должность
const profileName = document.querySelector('.profile__name'); // ФИО юзера
const profileJob = document.querySelector('.profile__job'); // Должность юзер
// константы для добавления места
const popupAdd = document.querySelector('.popup_type_add');
const formAdd = document.querySelector('.popup__form_type_add');
const elementInputName = document.querySelector('.popup__input_place_name');
const elementInputLink = document.querySelector('.popup__input_place_link');
const elementBtnAdd = document.querySelector('.profile__add-btn');
// константа для закрытия попапа
const closeBtns = document.querySelectorAll('.popup__close');
// константы для открытия попапа с картинкой
const popupPreview = document.querySelector('.popup_type_show');
const popupPreviewImg = document.querySelector('.popup__photo');
const popupPreviewSubtitle = document.querySelector('.popup__subtitle');


closeBtns.forEach(btn => { // ищем родителя крестика и вызываем функцию закрытия попапа по родителю крестика
	btn.addEventListener('click', (evt) => {
		popupClose(evt.target.closest('.popup'));
	});
})

// функция создания карточки
function createElement(item) {
	const elementCard = elementTemplate.cloneNode(true); // клонируем темплейт
	const elementCardName = elementCard.querySelector('.element__title'); // переменная заголовок карточки
	const elementCardImg = elementCard.querySelector('.element__img'); // переменная картинка карточки
	const elementBtnTrash = elementCard.querySelector('.element__btn-trash'); // переменная иконка корзины
	const elementBtnLike = elementCard.querySelector('.element__btn-like'); // переменная иконка лайка
	elementCardName.textContent = item.name; // предоставляем доступ к тексту внутри элемента
	elementCardImg.src = item.link; // берем атрибут src
	elementCardImg.alt = item.name; // берем атрибут alt
	elementBtnTrash.addEventListener('click', () => elementCard.remove()); // слушатель для иконки корзины + стрелочная функция "удаление карточки"
	elementBtnLike.addEventListener('click', () => elementBtnLike.classList.toggle('element__btn-like_active')); // слушатель для иконки лайка + стрелочная функция лайк/дизлайк 

	elementCardImg.addEventListener('click', () => {
		popupPreviewImg.src = item.link;
		popupPreviewImg.alt = item.name;
		popupPreviewSubtitle.textContent = item.name;
		popupOpen(popupPreview);
	});
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

// Функция для рендера карточки
function renderElement(card) {
	elementsBlock.prepend(createElement(card)); // Добаваляем методом prepend карточку
};

// Рендер начального массива
	initialCards.forEach(item => renderElement(item)); // Перебираем методом forEach начальный массив

// Слушатели:
popupOpenEditBtn.addEventListener('click', () => { // Слушатель для кнопки открытия попапа
	popupOpen(popupEdit);
	inputName.value = profileName.textContent;
	inputAbout.value = profileJob.textContent;
}); 
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















