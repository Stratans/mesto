export const options = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__btn-save',
	inactiveButtonClass: 'popup__btn-save_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible'
};

// константы для API:
export const token = 'ea7d7824-da17-4fe9-ad85-699e9e363bb4';
export const address = 'https://mesto.nomoreparties.co/v1/cohort-63';

// константы для формы редактирования:
export const popupEditBtn = document.querySelector('.profile__edit-btn'); // Кнопка «редактировать»
export const popupEditForm = document.querySelector('.popup__form_type_edit'); // находим форму редактирования профиля

// константы для добавления места:
export const placeFormAdd = document.querySelector('.popup__form_type_add'); // форма добавления места
export const placeBtnAdd = document.querySelector('.profile__add-btn'); // кнопка "добавить" место

// константы для изменения аватарки:
export const profileBtnUpdateAvatar = document.querySelector('.profile__avatar-container');
//console.log(profileBtnUpdateAvatar)
export const updateAvatarForm = document.querySelector('.popup__form_edit-avatar');
//console.log(updateAvatarForm)
export const avatarSelector = '.profile__avatar';


// константа для всех попапов:
export const popupSelector = document.querySelectorAll('.popup');

// НОВЫЕ КОНСТАНТЫ-СЕЛЕКТОРЫ:
export const containerSelector = '.elements';
export const popupWithImageSelector = '.popup_type_show';
export const popupAddCardSelector = '.popup_type_add';
export const popupEditProfileSelector = '.popup_type_edit';
export const nameSelector = '.profile__name';
export const aboutSelector = '.profile__job';
export const popupEditAvatarSelector = '.popup_type_avatar'
export const popupDeleteSelector = '.popup_type_delete'

//console.log(popupEditAvatarSelector)

