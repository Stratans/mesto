// Объявляем переменные
let popup = document.querySelector('.popup'); // Окно попапа
let popupOpenBtn = document.querySelector('.profile__edit-btn'); // Кнопка «редактировать»
let popupCloseBtn = document.querySelector('.popup__close'); // Кнопка «закрыть»
let popupForm = document.querySelector('.popup__form'); // Форма попапа
let inputName = document.querySelector('.popup__input_type_name'); // Инпут ФИО
let inputAbout = document.querySelector('.popup__input_type_about'); // Инпут Должность
let profileName = document.querySelector('.profile__name'); // ФИО юзера
let profileJob = document.querySelector('.profile__job'); // Должность юзера

// Функция для открытия попапа
let popupOpen = function() {
	popup.classList.add('popup_opened');
	inputName.value = profileName.textContent;
	inputAbout.value = profileJob.textContent;
}

// Функция для закрытия попапа
let popupClose = function() {
	popup.classList.remove('popup_opened');
}

// Функция для отправки формы
function handleFormSubmit(evt) {
	evt.preventDefault();
	profileName.textContent = inputName.value;
	profileJob.textContent = inputAbout.value;
	popupClose(); // Функция в функции - закрывает попап при нажатии на кнопку «Сохранить»
}

// Навешиваем слушателей
popupOpenBtn.addEventListener('click', popupOpen); // Слушатель для кнопки открытия попапа
popupCloseBtn.addEventListener('click', popupClose); // Слушатель для кнопки закрытия попапа
popupForm.addEventListener('submit', handleFormSubmit); // Слушатель для кнопки «сохранить»
