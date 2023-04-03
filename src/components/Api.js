export default class Api {
	constructor({ token, address }) {
		this._token = token;
		this._address = address;
		this._headers = {
			authorization: this._token,
			'Content-Type': 'application/json'
		}
	}

	getInitialCards() {
		return fetch(`${this._address}/cards`, {
			headers: this._headers,
		}).then((res) => res.json())
	};

	_response() {
		
	}

	// другие методы работы с API
}