// Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей.
// Cоздать кнопку, у которой при клике рандомно меняется цвет заднего фона
// Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).
// Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).

const photos = [
	'http://zhivotnue.ru/image/soxranenie_zhivotnux/soxranenie_barsuka/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/nufaydlend/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/kyrixaar/1.jpg',
	'http://zhivotnue.ru/image/dicie_zhivotnue/loshadi/xeke/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/bobbteil/1.jpg',
];

const change_color_btn = document.querySelector('.change_color_btn');
const colors = ['lightblue', 'darkgreen', 'red', 'blueviole', 'burlywood'];
let color_index = 0;

change_color_btn.addEventListener(
	'click',
	() =>
		(document.body.style.backgroundColor =
			colors[color_index++ % colors.length])
);
