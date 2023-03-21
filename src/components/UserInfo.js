export default class UserInfo {
	constructor( {nameSelector, aboutSelector} ) {
		this._name = document.querySelector(nameSelector);
		this._about = document.querySelector(aboutSelector);
	};

	getUserInfo() {
		return {
			title: this._name.textContent,
			data: this._about.textContent
		};
	};

	setUserInfo(dataInput) {
		this._name.textContent = dataInput.title;
		this._about.textContent = dataInput.data;
	};
};