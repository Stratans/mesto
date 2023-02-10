// константы для темплейта и секции Elements
const elementTemplate = document.querySelector('#element-template').content.querySelector('.element'); // находим темплейт, присваиваем ему карточку
const elementsBlock = document.querySelector('.elements'); // находим секцию elements
// константы для формы редактирования
const popupEditProfile = document.querySelector('.popup_type_edit'); // Находим окно формы редактирования
const popupEditBtn = document.querySelector('.profile__edit-btn'); // Кнопка «редактировать»
const popupEditForm = document.querySelector('.popup__form_type_edit'); // находим форму редактирования профиля
const popupInputName = document.querySelector('.popup__input_profile_name'); // Инпут ФИО
const popupinputAbout = document.querySelector('.popup__input_profile_about'); // Инпут Должность
const popupProfileName = document.querySelector('.profile__name'); // ФИО юзера
const popupProfileJob = document.querySelector('.profile__job'); // Должность юзера
// константы для добавления места
const placePopupAdd = document.querySelector('.popup_type_add'); // попап добавления места
const placeFormAdd = document.querySelector('.popup__form_type_add'); // форма добавления места
const placeInputNameAdd = document.querySelector('.popup__input_place_name'); // инпут название места
const placeInputLinkAdd = document.querySelector('.popup__input_place_link'); // инпут ссылка места
const placeBtnAdd = document.querySelector('.profile__add-btn'); // кнопка "добавить" место
// константа для закрытия всех попапов по крестику
const closeAllBtns = document.querySelectorAll('.popup__close');
// константы для открытия попапа с картинкой
const popupPreview = document.querySelector('.popup_type_show'); // попап открытия картинки
const popupPreviewImg = document.querySelector('.popup__photo'); // сама картинка 
const popupPreviewSubtitle = document.querySelector('.popup__subtitle'); // название картинки

// Константа для всех попапов
const popups = document.querySelectorAll('.popup');

closeAllBtns.forEach(btn => { // ищем родителя крестика и вызываем функцию закрытия попапа по родителю крестика
	btn.addEventListener('click', (evt) => {
		closePopup(evt.target.closest('.popup'));
	});
})

// функция создания карточки
function createElementCard(item) {
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
	elementCardImg.addEventListener('click', () => { // слушатель для превью фото + стрелочная функция открытия попапа с фото с параметрами 
		popupPreviewImg.src = item.link;
		popupPreviewImg.alt = item.name;
		popupPreviewSubtitle.textContent = item.name;
		openPopup(popupPreview);
	});
	return elementCard;
};

// Функция для открытия попапа
function openPopup(popupName) {
	document.addEventListener('keydown', pressEcsHandle);
	popupName.classList.add('popup_opened');
};

// Функция для закрытия попапа
function closePopup(popupName) {
	document.removeEventListener('keydown', pressEcsHandle)
	popupName.classList.remove('popup_opened');
};

// Функция для рендера карточки
function renderElement(card) {
	elementsBlock.prepend(createElementCard(card)); // Добаваляем методом prepend карточку
};

// Рендер начального массива
	initialCards.forEach(item => renderElement(item)); // Перебираем методом forEach начальный массив

// Функция для отправки формы
function submitEditHandleForm(evt) {
	evt.preventDefault();
	popupProfileName.textContent = popupInputName.value;
	popupProfileJob.textContent = popupinputAbout.value;
	closePopup(popupEditProfile); // Функция в функции - закрывает попап при нажатии на кнопку «Сохранить»
};

// Функция для добавления места
function submitAddHandleForm(evt) {
	evt.preventDefault();
	const cardData = {};
	cardData.name = placeInputNameAdd.value
	cardData.link = placeInputLinkAdd.value
	placeFormAdd.reset();
	renderElement(cardData);
	closePopup(placePopupAdd);
};

// Функция для кнопки Esc
function pressEcsHandle(evt) {
	if (evt.key === 'Escape') {
		closePopup(document.querySelector('.popup_opened'));
	}
}

// Вешаем слушателей
popupEditBtn.addEventListener('click', () => { // Слушатель для кнопки открытия попапа
	openPopup(popupEditProfile);
	popupInputName.value = popupProfileName.textContent;
	popupinputAbout.value = popupProfileJob.textContent;
}); 
popupEditForm.addEventListener('submit', submitEditHandleForm); // Слушатель для кнопки «сохранить»
placeBtnAdd.addEventListener('click', () => { // Слушатель на иконку плюса
	openPopup(placePopupAdd);
});
placeFormAdd.addEventListener('submit', submitAddHandleForm); // Слушатель сабмита на форму добавления

// Функция для закрытия всех попапов по оверлею
popups.forEach((popup) => {
	popup.addEventListener('mousedown', (evt) => {
		if (evt.target.classList.contains('popup_opened')) {
			closePopup(popup);
		}
		if (evt.target.classList.contains('popup__close')) {
			closePopup(popup);
		}
	});
});