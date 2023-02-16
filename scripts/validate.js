const options = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__btn-save',
	inactiveButtonClass: 'popup__btn-save_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__input-error_visible'
  };

// Функция, которая добавляет класс с ошибкой
function showInputError(formElement, inputElement, errorMessage, options) {

	// Находим элемент ошибки внутри самой функции
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

	// добавляем ошибку
	inputElement.classList.add(options.inputErrorClass);

	// присваиваем ошибке текст 
	errorElement.textContent = errorMessage;

	// делаем ошибку видимой
	errorElement.classList.add(options.errorClass);
  };

// Функция, которая удаляет класс с ошибкой
function hideInputError(formElement, inputElement, options) {

	// Находим элемент ошибки
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

	// Остальной код такой же, только чистим поля ввода
	inputElement.classList.remove(options.inputErrorClass);
	errorElement.classList.remove(options.errorClass);
	errorElement.textContent = '';
  };

// Функция, которая проверяет валидность поля
// Функция isValid теперь принимает formElement и inputElement,
// а не берёт их из внешней области видимости
function isValid(formElement, inputElement, options) {
	if (!inputElement.validity.valid) {

	  // showInputError теперь получает параметром форму, в которой
	  // находится проверяемое поле, и само это поле
	  showInputError(formElement, inputElement, inputElement.validationMessage, options);
	} else {

	  // hideInputError теперь получает параметром форму, в которой
	  // находится проверяемое поле, и само это поле
	  hideInputError(formElement, inputElement, options);
	}
  };

// Функция принимает массив полей
function hasInvalidInput(inputList) {

	// проходим по этому массиву методом some
	return inputList.some((inputElement) => {

	  // Если поле не валидно, колбэк вернёт true
	  // Обход массива прекратится и вся функция
	  // hasInvalidInput вернёт true
	  return !inputElement.validity.valid;
	})
  };

  // Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
function toggleButtonState(inputList, buttonElement, options) {

	// Если есть хотя бы один невалидный инпут
	if (hasInvalidInput(inputList)) {
		
	  // сделай кнопку неактивной
	  buttonElement.classList.add(options.inactiveButtonClass);
	  buttonElement.setAttribute('disabled', true);
	  
	} else {
	  // иначе сделай кнопку активной
	  buttonElement.classList.remove(options.inactiveButtonClass);
	  buttonElement.removeAttribute('disabled');
	}
  };

// Вызовем функцию isValid на каждый ввод символа
function setEventListeners(formElement, options) {

	// Находим все поля внутри формы,
	// сделаем из них массив методом Array.from
	const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));

	// Найдём в текущей форме кнопку отправки
	const buttonElement = formElement.querySelector(options.submitButtonSelector);

	// Вызовем toggleButtonState, чтобы не ждать ввода данных в поля
	toggleButtonState(inputList, buttonElement, options);

	// Обойдём все элементы полученной коллекции
	inputList.forEach((inputElement) => {

	  // каждому полю добавим обработчик события input
	  inputElement.addEventListener('input', () => {

		// Внутри колбэка вызовем isValid,
		// передав ей форму и проверяемый элемент
		isValid(formElement, inputElement, options)

		// Вызовем toggleButtonState и передадим ей массив полей и кнопку
		toggleButtonState(inputList, buttonElement, options);
	  });
	});
  };

// Добавление обработчиков всем формам
  function enableValidation(options) {

	// Найдём все формы с указанным классом в DOM,
	// сделаем из них массив методом Array.from
	const formList = Array.from(document.querySelectorAll(options.formSelector));

	// Переберём полученную коллекцию
	formList.forEach((formElement) => {

	  // Для каждой формы вызовем функцию setEventListeners,
	  // передав ей элемент формы
	  setEventListeners(formElement, options);
	});
  };
  
// Вызовем функцию
enableValidation(options); 






