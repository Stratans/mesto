//Создаем класс Card, записываем в него конструктор
export default class Card {
	constructor(data, templateSelector, handleCardClick) {
		this._templateSelector = templateSelector;
		this._name = data.name;
		this._link = data.link;
		this._handleCardClick = handleCardClick;
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

	// функция открытия попапа с картинкой
	_clickImageHandle = () => {
		{
			this._handleCardClick({ name: this._name, link: this._link }
			)
		};
	};

	// Метод для лайка карточки
	_pressLike() {
		this._like.classList.toggle('element__btn-like_active');
	};

	// Метод для удаления карточки
	_deleteCard() {
		this._elementCard.remove();
		this._elementCard = null;
	};

	// Генерируем карточку публичным методом
	generateCard() {
		this._elementCard = this._getTemplate();
		this._elementCardImg = this._elementCard.querySelector('.element__img');
		this._elementCardImg.src = this._link;
		this._elementCardImg.alt = this._name;
		this._elementCard.querySelector('.element__title').textContent = this._name;
		this._like = this._elementCard.querySelector('.element__btn-like');
		this._setEventListeners();
		return this._elementCard;
	};

	// Вешаем слушатели
	_setEventListeners() {
		this._elementCardImg.addEventListener('click', () => {
			this._clickImageHandle(this._name, this._link);
		});

		this._like.addEventListener('click', () => {
			this._pressLike()
		});

		this._elementCard.querySelector('.element__btn-trash').addEventListener('click', () => {
			this._deleteCard();
		});
	};

};

