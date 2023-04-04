//Создаем класс Card, записываем в него конструктор
export default class Card {
	constructor({ name, link, likes, _id, owner }, templateSelector, handleCardClick, userId, clickLikeHandle, openDelete) {
		this._name = name;
		this._link = link;
		this._likes = likes.length;
		this._cardId = _id;
		this._isUserOwner = owner._id === userId;
		this._isLiked = likes.some(like => like._id === userId);
		this._clickLikeHandle = clickLikeHandle;
		this._openDelete = openDelete;
		this._templateSelector = templateSelector;
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

	_deleteHandle = () => {
		this._openDelete(this._cardId, this._elementCard)
	}

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
		this._likeCount = this._elementCard.querySelector('.element__like-number')
		this._elementCard.querySelector('.element__title').textContent = this._name;
		this._like = this._elementCard.querySelector('.element__btn-like');
		this._likeCount.textContent = this._likes;
		if (this._isLiked) {
			this._like.classList.add('element__btn-like_active')
		};
		this._deleteBtn = this._elementCard.querySelector('.element__btn-trash');
		this._setEventListeners();
		return this._elementCard;
	};

	getInfo() {
		return { cardId: this._cardId, isLiked: this._isLiked }
	};

	setLike(data) {
		if (this._isLiked) {
			this._like.classList.remove('element__btn-like_active');
			this._likeCount.textContent = data.likes.length;
			this._isLiked = false


		}
		else {
			this._like.classList.add('element__btn-like_active');
			this._likeCount.textContent = data.likes.length;
			this._isLiked = true
		}
	};

	// Вешаем слушатели
	_setEventListeners() {
		this._elementCardImg.addEventListener('click', () => {
			this._clickImageHandle(this._name, this._link);
		});

		this._like.addEventListener('click', () => this._clickLikeHandle(this))

		if (this._isUserOwner) {
			this._deleteBtn.addEventListener('click', this._deleteHandle)
		}
		else {
			this._deleteBtn.remove();
		}
	};
};






