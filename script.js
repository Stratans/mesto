// Объявляем переменные
let popupEl = document.querySelector('.popup');
let popupOpenBtnEl = document.querySelector('.profile__edit-btn');
let popupCloseBtnEl = document.querySelector('.popup__close');
let formEl = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputAbout = document.querySelector('.popup__input_type_about');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Открываем попап
let popupOpen = function() {
	popupEl.classList.add('popup_opened');
	inputName.value = profileName.textContent;
	inputAbout.value = profileJob.textContent;
}

// Закрываем попап
let popupClose = function() {
	popupEl.classList.remove('popup_opened');
}

popupOpenBtnEl.addEventListener('click', popupOpen);
popupCloseBtnEl.addEventListener('click', popupClose);

