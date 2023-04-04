export default class Api {
	constructor({ token, address }) {
		this._token = token;
		this._address = address;
		this._headers = {
			authorization: this._token,
			'Content-Type': 'application/json'
		}
	}


	// обрабатываем ошибки с сервера
	_checkResponse(res) {
		if (!res.ok) {
			return Promise.reject(`Ошибка: ${res.status}`);
		}
		return res.json();
	}


	// получаем карточки 
	getInitialCards() {
		return fetch(`${this._address}/cards`, {
			headers: this._headers,
		}).then((res) => this._checkResponse(res))
	};

	// информация о пользователе с сервера
	getUserInfo() {
		return fetch(`${this._address}/users/me`, {
			headers: this._headers,
		}).then((res) => this._checkResponse(res))
	};

	// обновление данных профиля
	updateProfile({ name, about }) {
		return fetch(`${this._address}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({ name, about })
		}).then((res) => this._checkResponse(res))
	};


	// обновление аватара
	updateAvatar(avatar) {
		return fetch(`${this._address}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({ avatar })
		}).then((res) => this._checkResponse(res))
	};

	// // добавление карточки на сервер
	// setCard({ name, link }) {
	// 	return fetch(`${this._address}/cards`, {
	// 		method: 'POST',
	// 		headers: this._headers,
	// 		body: JSON.stringify({ name, link })
	// 	}).then((res) => this._checkResponse(res))
	// }

	// // добавление лайка
	// addLike(_id) {
	// 	return fetch(`${this._address}/cards/${id}/likes`, {
	// 		method: 'PATCH',
	// 		headers: this._headers,
	// 	}).then((res) => this._checkResponse(res))
	// };

	// // удаление лайка
	// removeLike(_id) {
	// 	return fetch(`${this._address}/cards/${id}/likes`, {
	// 		method: 'DELETE',
	// 		headers: this._headers,
	// 	}).then((res) => this._checkResponse(res))
	// };


	// // приостановка лайка
	// pauseLike(_id) {
	// 	return fetch(`${this._address}/cards/${id}/likes`, {
	// 		method: 'PUT',
	// 		headers: this._headers,
	// 	}).then((res) => this._checkResponse(res))
	// };


}










