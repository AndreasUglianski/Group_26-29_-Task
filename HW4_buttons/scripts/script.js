// 1.) Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей.

const incr_btn = document.querySelector('.incr_btn');
let size = 30;
incr_btn.addEventListener('click', () => {
	size += 10;
	incr_btn.style.width = size + 'px';
	incr_btn.style.height = size + 'px';
});

// 2.) Cоздать кнопку, у которой при клике рандомно меняется цвет заднего фона

// const change_color_btn = document.querySelector('.change_color_btn');
// const colors = ['lightblue', 'darkgreen', 'red', 'blueviole', 'burlywood'];
// let color_index = 0;

// change_color_btn.addEventListener('click', () => {
// 	let newColour = colors[Math.floor(Math.random() * colors.length)];
// 	document.body.style.backgroundColor = colors[0];
// 	colors.push(...colors.splice(0, 1));
// });

const change_color_btn = document.querySelector('.change_color_btn');
function randomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
change_color_btn.addEventListener('click', () => {
	document.body.style.backgroundColor = randomColor();
});
// 3.) Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).

// 4.) Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).
const slider = document.querySelector('.slider');
const photo = document.querySelector('.photo');
const photos = [
	'http://zhivotnue.ru/image/soxranenie_zhivotnux/soxranenie_barsuka/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/nufaydlend/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/kyrixaar/1.jpg',
	'http://zhivotnue.ru/image/dicie_zhivotnue/loshadi/xeke/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/bobbteil/1.jpg',
];
let photo_index = 0;

function nextPic() {
	photo_index += 1;
	if (photo_index > photos.length - 1) {
		photo_index = 0;
	}
	photo.style.backgroundImage = 'url(' + photos[photo_index] + ')';
}

photo.addEventListener('click', nextPic);
photo_index -= 1;
nextPic();
