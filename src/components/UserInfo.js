export default class UserInfo {
	constructor({ nameSelector, aboutSelector, avatarSelector }) {
		this._name = document.querySelector(nameSelector);
		this._about = document.querySelector(aboutSelector);
		this._avatar = document.querySelector(avatarSelector);
		this._userId = '';
	};

	getUserInfo() {
		return {
			name: this._name.textContent,
			about: this._about.textContent,
			userId: this._userId
		};
	};

	setUserInfo(dataInput) {
		this._name.textContent = dataInput.name;
		this._about.textContent = dataInput.about;
		this._avatar.src = dataInput.avatar;
		this._userId = dataInput._id
	};
};