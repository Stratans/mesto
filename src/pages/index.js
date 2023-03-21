import {
	initialCards,
	elementTemplate,
	elementsBlock,

	containerSelector,
	popupWithImageSelector,
	nameSelector,
	aboutSelector,
	popupEditProfileSelector,
	popupAddCardSelector,
	popupEditProfile,
	popupEditBtn,
	popupEditForm,
	popupInputName,
	popupinputAbout,
	popupProfileName,
	popupProfileJob,
	placePopupAdd,
	placeFormAdd,
	placeInputNameAdd,
	placeInputLinkAdd,
	placeBtnAdd,
	buttonsClosePopup,
	popupPreview,
	popupPreviewImg,
	popupPreviewSubtitle,
	popups
} from '../utils/constants.js'

import { options } from '../utils/constants.js'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const cardSectionData = {
	items: initialCards.reverse(),
	renderer: createCard
};

// добавляем пустую разметку
const cardSection = new Section(cardSectionData, containerSelector);
cardSection.renderItems();

// сабмит формы добавления
const submitAddFormHandle = (evt, dataInput) => {
	evt.preventDefault();
	const data = {};
	data.name = dataInput.name;
	data.link = dataInput.link;
	cardSection.addItem(createCard(data));
	popupAddCard.close();
};

// добавление карточки
const popupAddCard = new PopupWithForm(popupAddCardSelector, submitAddFormHandle);
popupAddCard.setEventListeners();

// просмотр картинки
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

const userInfo = new UserInfo( {nameSelector, aboutSelector} );

// сабмит профиля 
const submitEditCardFormHandle = (evt, dataInput) => {
	evt.preventDefault();
	userInfo.setUserInfo(dataInput);
	editProfile.close();
};

// редактирование профиля
const editProfile = new PopupWithForm(popupEditProfileSelector, submitEditCardFormHandle)
//console.log(popupEditProfileSelector)
editProfile.setEventListeners();

// добавляем валидацию в редактирование профиля  
const editValidation = new FormValidator(options, popupEditForm)
editValidation.enableValidation();

// добавляем валидацию в добавление места  
const addValidation = new FormValidator(options, placeFormAdd)
addValidation.enableValidation();


function openEditForm() {
	editProfile.open(userInfo.getUserInfo());
};



// создание карточки
function createCard(item) {
	const cardElement = new Card(
		item,
		'#element-template',
		() => {popupWithImage.open(item)}
	).generateCard();
	return cardElement;
};


// слушатель на кнопке редактировать
popupEditBtn.addEventListener('click', openEditForm);

// слушатель на кнопке добавления
placeBtnAdd.addEventListener('click', () => {popupAddCard.open()});














// вешаем слушатели:

// // слушатель для кнопки открытия попапа
// popupEditBtn.addEventListener('click', () => {
// 	handleImageClick(popupEditProfile);
// 	popupInputName.value = popupProfileName.textContent;
// 	popupinputAbout.value = popupProfileJob.textContent;
// 	editValidation.resetValidation();
// });
// // слушатель для кнопки «сохранить»
// popupEditForm.addEventListener('submit', submitEditHandleForm);
// // слушатель на иконку плюса
// placeBtnAdd.addEventListener('click', () => {
// 	handleImageClick(placePopupAdd);
// 	addValidation.resetValidation();
// });
// // слушатель сабмита на форму добавления
// placeFormAdd.addEventListener('submit', submitAddHandleForm);

// const options = {
// 	formSelector: '.popup__form',
// 	inputSelector: '.popup__input',
// 	submitButtonSelector: '.popup__btn-save',
// 	inactiveButtonClass: 'popup__btn-save_disabled',
// 	inputErrorClass: 'popup__input_type_error',
// 	errorClass: 'popup__input-error_visible'
// };

// // константы для темплейта и секции Elements:
// const elementTemplate = document.querySelector('#element-template').content.querySelector('.element'); // находим темплейт, присваиваем ему карточку
// const elementsBlock = document.querySelector('.elements'); // находим секцию elements
// const elementSelector = '.elements'; // задаем секции elements селектор

// // константы для формы редактирования:
// const popupEditProfile = document.querySelector('.popup_type_edit'); // Находим окно формы редактирования
// const popupEditBtn = document.querySelector('.profile__edit-btn'); // Кнопка «редактировать»
// const popupEditForm = document.querySelector('.popup__form_type_edit'); // находим форму редактирования профиля
// const popupInputName = document.querySelector('.popup__input_profile_name'); // Инпут ФИО
// const popupinputAbout = document.querySelector('.popup__input_profile_about'); // Инпут Должность
// const popupProfileName = document.querySelector('.profile__name'); // ФИО юзера
// const popupProfileJob = document.querySelector('.profile__job'); // Должность юзера

// // константы для добавления места:
// const placePopupAdd = document.querySelector('.popup_type_add'); // попап добавления места
// const placeFormAdd = document.querySelector('.popup__form_type_add'); // форма добавления места
// const placeInputNameAdd = document.querySelector('.popup__input_place_name'); // инпут название места
// const placeInputLinkAdd = document.querySelector('.popup__input_place_link'); // инпут ссылка места
// const placeBtnAdd = document.querySelector('.profile__add-btn'); // кнопка "добавить" место

// // константа для закрытия всех попапов по крестику
// export const buttonsClosePopup = document.querySelectorAll('.popup__close');

// // константы для открытия попапа с картинкой:
// const popupPreview = document.querySelector('.popup_type_show'); // попап открытия картинки
// const popupPreviewImg = document.querySelector('.popup__photo'); // сама картинка
// const popupPreviewSubtitle = document.querySelector('.popup__subtitle'); // название картинки

// // константа для всех попапов
// const popups = document.querySelectorAll('.popup');


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // ищем родителя крестика и вызываем функцию 
// //закрытия попапа по родителю крестика
// buttonsClosePopup.forEach((btn) => {
// 	btn.addEventListener('click', (evt) => {
// 		closePopup(evt.target.closest('.popup'));
// 	});
// });

// // функция открытия попапа с картинкой
// function openPreview (name, link) {
// 	popupPreviewImg.alt = name;
// 	popupPreviewImg.src = link;
// 	popupPreviewSubtitle.textContent = name;
// 	handleImageClick(popupPreview);
// };

// // // СОЗДАНИЕ КАРТОЧЕК
// // function createElementCard(item) {
// // 	const elementCard = new Card(item, '#element-template', openPreview)
// // 		.generateCard();
// // 	return elementCard;
// // };

// // функция для открытия попапа
// function handleImageClick(popupName) {
// 	document.addEventListener('keydown', pressEcsHandle);
// 	popupName.classList.add('popup_opened');
// };

// // функция для закрытия попапа
// function closePopup(popupName) {
// 	document.removeEventListener('keydown', pressEcsHandle)
// 	popupName.classList.remove('popup_opened');
// };

// //функция закрытия по кнопке Esc
// function pressEcsHandle(evt) {
// 	if (evt.key === 'Escape') {
// 		closePopup(document.querySelector('.popup_opened'));
// 	};
// };

// // функция для закрытия всех попапов по оверлею
// popups.forEach((popup) => {
// 	popup.addEventListener('click', (evt) => {
// 		if (evt.target.classList.contains('popup')) {
// 			closePopup(popup);
// 		}
// 	});
// });

// // функция для рендера карточки
// function renderElement(card) {
// 	// Добаваляем методом prepend карточку
// 	elementsBlock.prepend(createElementCard(card));
// };

// // рендер начального массива
// // Перебираем методом forEach начальный массив
// initialCards.forEach((item) => renderElement(item));

// // функция для отправки формы
// function submitEditHandleForm(evt) {
// 	evt.preventDefault();
// 	popupProfileName.textContent = popupInputName.value;
// 	popupProfileJob.textContent = popupinputAbout.value;
// 	// Функция в функции - закрывает попап при нажатии на кнопку «Сохранить»
// 	closePopup(popupEditProfile);
// };

// // функция для добавления места
// function submitAddHandleForm(evt) {
// 	evt.preventDefault();
// 	const cardData = {};
// 	cardData.name = placeInputNameAdd.value
// 	cardData.link = placeInputLinkAdd.value
// 	renderElement(cardData);
// 	closePopup(placePopupAdd);
// 	placeFormAdd.reset();
// };





