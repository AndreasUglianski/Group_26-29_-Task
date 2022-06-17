///// --- DOM  -----

const workers = [
	{
		id: 1,
		first_name: 'Olga',
		last_name: 'Petrova',
		age: 18,
		rate: 100,
		days: 15,
		photo: 'https://reqres.in/img/faces/12-image.jpg',
		email: 'hello@gmail.com',
		progress: 50,
	},

	{
		id: 2,
		first_name: 'Petr',
		last_name: 'Ivanov',
		age: 46,
		rate: 70,
		days: 22,
		photo: 'https://reqres.in/img/faces/4-image.jpg',
		email: 'hello@gmail.com',
		progress: 10,
	},

	{
		id: 3,
		first_name: 'Oleg',
		last_name: 'Orlov',
		age: 32,
		rate: 34,
		days: 10,
		photo: 'https://reqres.in/img/faces/10-image.jpg',
		email: 'hello@gmail.com',
		progress: 75,
	},

	{
		id: 4,
		first_name: 'Irina',
		last_name: 'Medvedeva',
		age: 22,
		rate: 85,
		days: 17,
		photo: 'https://reqres.in/img/faces/2-image.jpg',
		email: 'hello@gmail.com',
		progress: 30,
	},
];

// ///Задан массив объектов workers. Выведите на экран
// ///карточки со следующей информацией по всем работникам:
// ID, Имя, Фамилия, Возраст, Зарплата, фото.
//

///Зарплата рассчитывается через умножение ставки на
// количество дней.Карточки должны включать отображение
// фотографии.

///Примените стили к карточкам: width,
//     padding, border, background - color.

const rootElem = document.querySelector('#root');

workers.forEach(function ({
	id,
	first_name,
	last_name,
	age,
	rate,
	days,
	photo,
}) {
	const container = document.createElement('div');
	const idElem = document.createElement('p');
	const firstNameElem = document.createElement('p');
	const lastNmeElem = document.createElement('p');
	const ageElem = document.createElement('p');
	const salaryElem = document.createElement('p');
	const photoElem = document.createElement('img');

	idElem.innerText = `ID: ${id}`;
	firstNameElem.innerText = `First name: ${first_name}`;
	lastNmeElem.innerText = `Last name: ${last_name}`;
	ageElem.innerText = `Age: ${age}`;
	salaryElem.innerText = `Salary: ${rate * days}`;

	photoElem.setAttribute('src', photo);
	photoElem.setAttribute('alt', 'photo of worker');

	/// <img src="ссылка" alt="альтернативный текст">
	///  <a href="mailto:email"></a>

	container.classList.add('container'); //добавляем класс контейнеру

	container.append(
		idElem,
		firstNameElem,
		lastNmeElem,
		ageElem,
		salaryElem,
		photoElem
	);
	rootElem.append(container);
});
