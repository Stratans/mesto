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
	address,
	avatarSelector
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


api.getInitialCards().then(cards => cardSection.renderItems(cards));
api.getUserInfo().then(userData => userInfo.setUserInfo(userData))

//console.log(api.getUserInfo())

// начальный массив
const cardSectionData = {
	items: [],
	renderer: createCard
};

// добавляем пустую разметку
const cardSection = new Section(cardSectionData, containerSelector);

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

const userInfo = new UserInfo({ nameSelector, aboutSelector, avatarSelector });

// сабмит профиля 
const submitEditCardFormHandle = (evt, dataInput) => {
	evt.preventDefault();
	
	api.updateProfile(dataInput).then((data) => {
	userInfo.setUserInfo(data);
	//console.log(data)
	popupEditProfile.close();
	});
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

function submitEditAvatar(evt, {avatar}) {
	evt.preventDefault();
	api.updateAvatar(avatar).then((data) => {
		userInfo.setUserInfo(data);
		popupEditAvatar.close();
	})

}


// обновление аватара
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, submitEditAvatar)
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
//console.log(profileBtnUpdateAvatar)





