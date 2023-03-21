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
		//console.log(inputsValues)
		return inputsValues;
		//console.log(inputsValues)
	};

	// _getInputValues () {
	// 	const inputData = this._inputs.reduce((obj, input) => {
	// 	  obj[input.name] = input.value;
	// 	  return obj;
	// 	}, {});
	// 	return inputData;
	//   }

	_onSubmitHandler = (evt) => {
		this._submitForm(evt, this._getInputValues());
		//console.log(this._getInputValues())
	};

	open(values) {
		super.open();
		if (values) {
			this._inputs.forEach(input => {
				input.value = values[input.name] || '';
			});
		};
	};

	close() {
		this._form.reset();
		super.close();
	};

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', this._onSubmitHandler);
	};
};





