import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
	constructor(popupSelector, submitForm) {
		super(popupSelector);
		this._submitForm = submitForm;
		this._form = this._popup.querySelector('.popup__form');
		this._inputs = this._form.querySelectorAll('.popup__input');
		this._btn = this._popup.querySelector('.popup__btn-save');
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
		if (values) {
			this._inputs.forEach(input => {
				input.value = values[input.name] || '';
			})
		}
	};

	close() {
		super.close();
		this._form.reset();
	};

	// публичный метод для рендерига кнопки сабмита
	renderingBtn(isLoading, text = 'Сохранение...') {
		this._btn.disabled = isLoading;
		this._btn.textContent = text;
	};

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', this._onSubmitHandle);
	};
};