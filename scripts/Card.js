'use strict'

//Создаем класс Card, записываем в него конструктор
class Card {
	constructor(data, templateSelector, openPopup) {
		this._templateSelector = templateSelector;
		this._link = data.link;
		this._name = data.name;
		this._openPopup = openPopup;
	};

	// Метод _getTemplate - находим и возвращаем шаблон карточки
	_getTemplate() {
		const cardElement = document
		.querySelector(this._templateSelector)
		.content
		.querySelector('.element')
		.cloneNode(true);
		return cardElement;
	};

	// Генерируем карточку публичным методом
	generateCard() {
		this._elementCard = this._getTemplate();
		this._elementCardImg = this._elementCard.querySelector('.element__img');
		this._elementCardImg.src = this._link;
		this._elementCardImg.alt = this._name;
		this._elementCard.querySelector('.element__title').textContent = this._name;
		this._setEventListeners();
		return this._elementCard;
	};

// Вешаем слушатели
_setEventListeners() {
	this._elementCardImg.addEventListener('click', () => {
		this._openPopup(this._name, this._link) 
	});
	this._elementCard.querySelector('.element__btn-like').addEventListener('click', (evt) => {
		evt.target.classList.toggle('element__btn-like_active')
	});
	this._elementCard.querySelector('.element__btn-trash').addEventListener('click', () => {
		this._elementCard.remove()
		this._elementCard = null
	});
};
};

export default Card


	