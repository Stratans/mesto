import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
	constructor(popupSelector, submitForm) {
		super(popupSelector);
		this._submitForm = submitForm;
		this._form = this._popup.querySelector('.popup__form')
		this._inputs = document.querySelectorAll('.popup__input');
	};

	_getInputValues() {
		const inputsValues = {};
		this._inputs.forEach((input) => {
			inputsValues[input.name] = input.value;
		});
		return inputsValues;
	};

	_onSubmitHandle = (evt) => {
		this._submitForm(evt, this._getInputValues());
	};

	open(values) {
		super.open();
// 		const validatorAddCard = new FormValidator(options, placeFormAdd)
// validatorAddCard.enableValidation();
		if (values) {
			this._inputs.forEach(input => {
				input.value = values[input.name] || '';
			});
		};
	};

	close() {
		super.close();
		this._form.reset();
	};

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', this._onSubmitHandle);
	};
};