import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
	constructor (popupSelector, submitConfirmation) {
		super (popupSelector);
		this._submit = submitConfirmation;
		this._form = this._popup.querySelector('.popup__form');
		//console.log(this._form)
	}

	_onSubmit = evt => {
		this._submit(evt, {cardId: this._cardId, card: this._card})
	}

	open(cardId, card) {
		super.open();
		this._cardId = cardId;
		this._card = card;
	}

	setEventListeners() {
		super.setEventListeners();
		this._form.addEventListener('submit', this._onSubmit);
	}


}