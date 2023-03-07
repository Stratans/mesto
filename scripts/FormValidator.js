'use strict'

export class FormValidator {
	constructor(options, formElement) {
		this._formElement = formElement
		this._formSelector = options.formSelector
		this._inputSelector = options.inputSelector;
		this._submitButtonSelector = options.submitButtonSelector;
		this._inactiveButtonClass = options.inactiveButtonClass;
		this._inputErrorClass = options.inputErrorClass;
		this._errorClass = options.errorClass;
	};

	// Функция, которая добавляет класс с ошибкой
	_showInputError(inputElement) {
		// Находим элемент ошибки внутри самой функции
		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		// добавляем ошибку
		inputElement.classList.add(this._inputErrorClass);
		// присваиваем ошибке текст 
		errorElement.textContent = inputElement.validationMessage;
		// делаем ошибку видимой
		errorElement.classList.add(this._errorClass);
	};

	// Функция, которая удаляет класс с ошибкой
	_hideInputError(inputElement) {
		// Находим элемент ошибки
		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		// Остальной код такой же, только чистим поля ввода
		inputElement.classList.remove(this._inputErrorClass);
		errorElement.classList.remove(this._errorClass);
		errorElement.textContent = '';
	};

	// Функция, которая проверяет валидность поля
	// Функция isValid теперь принимает formElement и inputElement,
	// а не берёт их из внешней области видимости
	_isValid(inputElement) {
		if (!inputElement.validity.valid) {
			// showInputError теперь получает параметром форму, в которой
			// находится проверяемое поле, и само это поле
			this._showInputError(inputElement);
		} else {
			// hideInputError теперь получает параметром форму, в которой
			// находится проверяемое поле, и само это поле
			this._hideInputError(inputElement);
		}
	};

	// Функция принимает массив полей
	_hasInvalidInput() {
		// проходим по этому массиву методом some
		return this._inputList.some((inputElement) => {
			// Если поле не валидно, колбэк вернёт true
			// Обход массива прекратится и вся функция
			// hasInvalidInput вернёт true
			return !inputElement.validity.valid;
		})
	};

	// Функция принимает массив полей ввода
	// и элемент кнопки, состояние которой нужно менять
	_toggleButtonState() {
		// Если есть хотя бы один невалидный инпут
		if (this._hasInvalidInput()) {
			// сделай кнопку неактивной
			this._buttonElement.classList.add(this._inactiveButtonClass);
			this._buttonElement.setAttribute('disabled', true);
		} else {
			// иначе сделай кнопку активной
			this._buttonElement.classList.remove(this._inactiveButtonClass);
			this._buttonElement.removeAttribute('disabled');
		}
	};

	// Вызовем функцию isValid на каждый ввод символа
	_setEventListeners() {
		// Находим все поля внутри формы,
		// сделаем из них массив методом Array.from
		this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
		// Найдём в текущей форме кнопку отправки
		this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
		// Вызовем toggleButtonState, чтобы не ждать ввода данных в поля

		this._toggleButtonState();

		// блокируем самбит при создании карточки
		this._formElement.addEventListener('reset', () => {
			setTimeout(() => {
				this._toggleButtonState()
			}, 0);
		});

		
		// Обойдём все элементы полученной коллекции
		this._inputList.forEach((inputElement) => {
			// каждому полю добавим обработчик события input
			inputElement.addEventListener('input', () => {
				// Внутри колбэка вызовем isValid,
				// передав ей форму и проверяемый элемент
				this._isValid(inputElement)
				// Вызовем toggleButtonState и передадим ей массив полей и кнопку
				this._toggleButtonState();
			});
		});
	};

	resetValidation() {
		this._inputList.forEach((inputElement) => {
			this._hideInputError(inputElement)
		});
		this._toggleButtonState()
	}

	// Вызовем функцию
	enableValidation() {
		this._setEventListeners()
	}

}

export default FormValidator






