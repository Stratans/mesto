export default class Section {
	constructor({ items, renderer }, containerSelector) {
		this._items = items;
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
		//console.log(this._items)
	};

	addItem(item) {
		this._container.prepend(item);
	};

	renderItems(items) {
		items.forEach((item) => {
			this._container.append(this._renderer(item));
		});
	};
	
};