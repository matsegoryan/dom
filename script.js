// Массивы с картинками слайдера и подписями для каждой страницы

// Главная
var textMain = ["Печать футболок", "Печать кружек", "Печать чехлов"];
var imgMain = ['img/slide1.png', 'img/slide2.png', 'img/slide3.png'];

// Футболки
var textTshirts = ["Nope кот", "Кот орет", "Загрузи свой дизайн"];
var imgTshirts = ['img/tshirt1.png', 'img/tshirt2.png', 'img/tshirt3.png'];

// Кружки
var textCups = ["У самяурая нет ъеьи, только ъуь", "Рождество", "Загрузи свой дизайн"];
var imgCups = ['img/cup1.png', 'img/cup2.png', 'img/cup3.png'];

// Чехлы
var textCases = ["Жерло вулкана", "Я программист", "Загрузи свой дизайн"];
var imgCases = ['img/case1.png', 'img/case2.png', 'img/case3.png'];



// Получить элемент картинки слайдера и абзаца с подписью 
var slideImage = document.getElementById('slide-image');
var slideText = document.getElementById('slide-text');

// Индекс текущей картинки в массиве
var i = 0;




// Поменять слайд на 1 влево или вправо
function changeSlide(images, texts, change) {

    // Поменять счетчик на -1 или +1, в зависимости от того что передано в change
    i += change;
    
    // Если картинок влево в массиве больше нет, поменять счетчик на крайнюю правую картинку
    if (i < 0) {
        i = 2;
    } 
        
    // Если картинок вправо в массиве больше нет, поменять счетчик на крайнюю левую картинку
    if (i > 2) {
        i = 0;
    }

    // Поменять картинку из переданного массива с картинками
    slideImage.src = images[i];

    // Поменять текст в абзаце из переданного массива с подписями
    slideText.innerHTML = texts[i];

}


// Вызов функции переключения слайдов при нажатии на стрелки
document.addEventListener('keydown', function(event) {
    // Для каждой страницы разные вызовы

    // Если id элемента body равно main (главная)
    if (document.body.id == 'main') {
        // Назначить на стрелки влево и вправо переключение слайдов для главной страницы
        if (event.key == 'ArrowRight') {
            changeSlide(imgMain, textMain, 1);
        }
        if (event.key == 'ArrowLeft') {
            changeSlide(imgMain, textMain, -1);
        }
    }

    // Если id элемента body равно tshirts (футболки)
    if (document.body.id == 'tshirts') {
        // Назначить на стрелки влево и вправо переключение слайдов для футболок
        if (event.key == 'ArrowRight') {
            changeSlide(imgTshirts, textTshirts, 1);
        }
        if (event.key == 'ArrowLeft') {
            changeSlide(imgTshirts, textTshirts, -1);
        }
    }

    // Если id элемента body равно cups (кружки)
    if (document.body.id == 'cups') {
        // Назначить на стрелки влево и вправо переключение слайдов для кружек
        if (event.key == 'ArrowRight') {
            changeSlide(imgCups, textCups, 1);
        }
        if (event.key == 'ArrowLeft') {
            changeSlide(imgCups, textCups, -1);
        }
    }

    // Если id элемента body равно cases (чехлы)
    if (document.body.id == 'cases') {
        // Назначить на стрелки влево и вправо переключение слайдов для чехлов
        if (event.key == 'ArrowRight') {
            changeSlide(imgCases, textCases, 1);
        }
        if (event.key == 'ArrowLeft') {
            changeSlide(imgCases, textCases, -1);
        }
    }
});




// Поменять стиль блока действия
function changeStyle(element) {
    element.style.backgroundColor = 'orange';
}

// Восстановить прежний стиль блока действия
function resetStyle(element) {
    element.style.backgroundColor = 'white';
}






// Нажатие на пробел показывает сообщение
document.addEventListener('keydown', function(event) {
    // Если нажат пробел
    if (event.key == ' ') {
        // Убрать действие по умолчанию
        event.preventDefault();

        // Показать сообщение
        alert("Мяу");
    }
});