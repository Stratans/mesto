import '../pages/index.css'
import {
	initialCards,
	containerSelector,
	popupWithImageSelector,
	nameSelector,
	aboutSelector,
	popupEditProfileSelector,
	popupAddCardSelector,
	popupEditBtn,
	popupEditForm,
	placeFormAdd,
	placeBtnAdd,
	updateAvatarForm,
	profileBtnUpdateAvatar,
	popupEditAvatarSelector,
	token,
	address
} from '../utils/constants.js'

import { options } from '../utils/constants.js'

import Card from '../components/Card.js'
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'

const api = new Api({token, address});
//console.log(api.getInitialCards())

//const cardIni = api.getInitialCards()
//console.log(cardIni)
//console.log(cardIni[1])



// начальный массив
const cardSectionData = {
	items: initialCards,
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

const userInfo = new UserInfo({ nameSelector, aboutSelector });

// сабмит профиля 
const submitEditCardFormHandle = (evt, dataInput) => {
	evt.preventDefault();
	userInfo.setUserInfo(dataInput);
	popupEditProfile.close();
};

// редактирование профиля
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, submitEditCardFormHandle)
popupEditProfile.setEventListeners();

// валидация в профиле  
const validatorEditProfile = new FormValidator(options, popupEditForm)
validatorEditProfile.enableValidation();

// валидация в добавлении карточки
const validatorAddCard = new FormValidator(options, placeFormAdd)
validatorAddCard.enableValidation();

// валидация в обновлении аватара
const validatorUpdateAvatar = new FormValidator(options, updateAvatarForm)
validatorUpdateAvatar.enableValidation();

// функция открытия окна редактирования
function openEditForm() {
	popupEditProfile.open(userInfo.getUserInfo());
};


// обновление аватара
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, submitEditCardFormHandle)
popupEditAvatar.setEventListeners();

// function openEditAvatar() {
// 	popupEditAvatar.open(userInfo.getUserInfo());
// };


// создание карточки
function createCard(item) {
	const cardElement = new Card(
		item,
		'#element-template',
		() => { popupWithImage.open(item) }
	).generateCard();
	return cardElement;
};

// слушатель на кнопке редактировать
popupEditBtn.addEventListener('click', openEditForm);

// слушатель на кнопке добавления
placeBtnAdd.addEventListener('click', () => { 
	popupAddCard.open();
	validatorAddCard.disableSubmitButton();
});

// слушатель на обновление аватара
profileBtnUpdateAvatar.addEventListener('click', () => {
	popupEditAvatar.open()
	validatorUpdateAvatar.disableSubmitButton();
});
//console.log(popupEditAvatar)





