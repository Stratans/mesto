import '../pages/index.css'
import {
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
	popupDeleteSelector,
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
import PopupWithConfirmation from '../components/PopupWithConfirmation.js'

// подключение апи
const api = new Api({ token, address });

// загрузка начальных данных
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardSection.renderItems(cards);
  })
  .catch((err) => console.log(`Ошибка: ${err}`))

// информация о пользователе 
const userInfo = new UserInfo({ nameSelector, aboutSelector, avatarSelector });

// начальный массив
const cardSectionData = {
	items: [],
	renderer: createCard
};







// добавляем пустую разметку
const cardSection = new Section(cardSectionData, containerSelector);

// попап "добавление карточки"
const popupAddCard = new PopupWithForm(popupAddCardSelector, submitAddFormHandle);
popupAddCard.setEventListeners();

// попап "просмотр картинки"
const popupWithImage = new PopupWithImage(popupWithImageSelector);
popupWithImage.setEventListeners();

// попап "редактирование профиля"
const popupEditProfile = new PopupWithForm(popupEditProfileSelector, submitEditCardFormHandle)
popupEditProfile.setEventListeners();

// попап подтверждения удаления
const popupConfirmation = new PopupWithConfirmation(popupDeleteSelector, submitDeleteCardFormHandle)
popupConfirmation.setEventListeners();

// попап "обновление аватара"
const popupEditAvatar = new PopupWithForm(popupEditAvatarSelector, submitEditAvatar)
popupEditAvatar.setEventListeners();

// валидация в профиле  
const validatorEditProfile = new FormValidator(options, popupEditForm)
validatorEditProfile.enableValidation();

// валидация в добавлении карточки
const validatorAddCard = new FormValidator(options, placeFormAdd)
validatorAddCard.enableValidation();

// валидация в обновлении аватара
const validatorUpdateAvatar = new FormValidator(options, updateAvatarForm)
validatorUpdateAvatar.enableValidation();

// создание карточки
function createCard(item) {
	const cardElement = new Card(
		item,
		'#element-template',
		() => { popupWithImage.open(item) },
		userInfo.getUserInfo().userId,
		clickLikeHandle,
		(cardId, card) => popupConfirmation.open(cardId, card)
	).generateCard();
	return cardElement;
};





// функция открытия окна редактирования
function openEditForm() {
	popupEditProfile.open(userInfo.getUserInfo());
};

// функция для лайка
function clickLikeHandle(card) {
	api
	.toggleLike(card.getInfo())
	.then(res => card.setLike(res))
	.catch((err) => console.log(`Ошибка: ${err}`))
};

// функция для удаления карточки
function submitDeleteCardFormHandle(evt, {cardId, card}) {
	evt.preventDefault();
	api
	.deleteCard(cardId)
	.then(() => {
		card.remove();
		popupConfirmation.close();
	})
	.catch((err) => console.log(`Ошибка: ${err}`))
};

// сабмит профиля 
function submitEditCardFormHandle (evt, dataInput) {
	evt.preventDefault();
	popupEditProfile.renderingBtn(true)
	api.updateProfile(dataInput).then((data) => {
		userInfo.setUserInfo(data);
		popupEditProfile.close();
	})
	.catch((err) => console.log(`Ошибка: ${err}`))
	.finally(() => {
		popupEditProfile.renderingBtn(false)
		})
};

// сабмит формы добавления
function submitAddFormHandle (evt, dataInput) {
	evt.preventDefault();
	popupAddCard.renderingBtn(true);
	api
	.setCard(dataInput)
	.then((data) => {
	cardSection.addItem(createCard(data));
	popupAddCard.close();
	})
	.catch((err) => console.log(`Ошибка: ${err}`))
	.finally(() => {
		popupAddCard.renderingBtn(false)
		});
};

// сабмит аватара
function submitEditAvatar(evt, { avatar }) {
	evt.preventDefault();
	popupEditAvatar.renderingBtn(true)
	api.updateAvatar(avatar).then((data) => {
		userInfo.setUserInfo(data);
		popupEditAvatar.close();
	})
	.catch((err) => console.log(`Ошибка: ${err}`))
	.finally(() => {
	popupEditAvatar.renderingBtn(false)
	})
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