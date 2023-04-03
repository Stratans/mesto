export default class Api {
	constructor ({token, address}) {
		this._address = address;
		this._token = token;
	}

	getInitialCards() {
		// ...
	  }
	
	  // другие методы работы с API
}


const api = new Api({
	baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
	headers: {
	  authorization: 'ea7d7824-da17-4fe9-ad85-699e9e363bb4',
	  'Content-Type': 'application/json'
	}
  }); 