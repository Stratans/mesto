// Массив первые 6 карточек
export const initialCards = [
	{
		name: 'Леман Русс',
		link: 'https://sun9-west.userapi.com/sun9-13/s/v1/if1/SVXRLLL-B9-g7T9CBvuHEDs4KntQKUfDvc-JyruurjoAT5lTLBqM-_ZnWAjFBjVJN5GMZ-NR.jpg?size=625x980&quality=96&type=album'
	},
	{
		name: 'Сангвиний',
		link: 'https://sun9-40.userapi.com/impf/c834201/v834201863/5b09b/AmqVV_U4YkU.jpg?size=600x940&quality=96&sign=ca8cbdee2d98e5d7d1ea7e80d2da2f44&type=album'
	},
	{
		name: 'Корвус Коракс',
		link: 'https://sun9-north.userapi.com/sun9-79/s/v1/if1/90I5vHRmZF2WqT2Fg1mj-lsVRGmFHMiA2qxIkpXyg3lh-XxAWTW8PoLQ-T6dF_YNYOyNgE_p.jpg?size=625x980&quality=96&type=album'
	},
	{
		name: 'Робаут Жиллиман',
		link: 'https://sun9-west.userapi.com/sun9-49/s/v1/if1/BT-huQVvYT9n0kUvQKp46SvrmTC7_OB3I2JoM6LfL9OMfbVqJ7UmHWJOW2n8X-gWVkon_O99.jpg?size=625x980&quality=96&type=album'
	},
	{
		name: 'Рогал Дорн',
		link: 'https://sun9-east.userapi.com/sun9-24/s/v1/if1/KKvDXk9GECxUZVcC3h7dy99xi4G8aJaIcKLXWt0BFggo4Z6YAqy-hxVArit-QaiSrh32UgCY.jpg?size=625x980&quality=96&type=album'
	},
	{
		name: 'Император',
		link: 'https://sun9-east.userapi.com/sun9-32/s/v1/ig2/ADBUiIfu7CwwXYa6zsNYDaSPuGYuMul8WMMoYxUwAdmmDRrUAjBrxy6YSX4jeklin8UhDXfDMz2M38H1BG5x-H0g.jpg?size=625x980&quality=96&type=album'
	}

];

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

// константа для всех попапов
export const popupSelector = document.querySelectorAll('.popup');

// НОВЫЕ КОНСТАНТЫ-СЕЛЕКТОРЫ
export const containerSelector = '.elements';
export const popupWithImageSelector = '.popup_type_show';
export const popupAddCardSelector = '.popup_type_add';
export const popupEditProfileSelector = '.popup_type_edit';
export const nameSelector = '.profile__name';
export const aboutSelector = '.profile__job';