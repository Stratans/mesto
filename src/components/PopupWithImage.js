import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._image = document.querySelector('.popup__photo');
		this._subtitle = document.querySelector('.popup__subtitle');
	};

	open({ link, name }) {
		this._image.src = link;
		this._image.alt = `Изображение $(name)`;
		this._subtitle.textContent = name;
		super.open();
	};
};