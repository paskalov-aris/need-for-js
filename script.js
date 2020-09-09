// Занесение переменных
const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');

car.classList.add('car');

// Добавляем слушатели событий
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

// Объект с кнопками "стрелочек"
const keys = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowRight: false,
    ArrowLeft: false,
}

// Настройки
const setting = {
    start: false,
    score: 0,
    speed: 3
}

// Функция запуска игры
function startGame() {
    start.classList.add('hide');
    setting.start = true;
    gameArea.appendChild(car);
    setting.x = car.offsetLeft;
    requestAnimationFrame(playGame);
}

// Функция с процессом игры
function playGame() {
    debugger;
    console.log('play game');

    if(setting.start) {
        if(keys.ArrowLeft) {
            setting.x--;
        }
        if(keys.ArrowRight) {
            setting.x++;
        }

        car.style.left = setting.x + 'px';

        requestAnimationFrame(playGame);
    }
}

// Функция старта движения
function startRun(event) {
    event.preventDefault();
    keys[event.keys] = true;
}

// Функция конца движения
function stopRun(event) {
    event.preventDefault();
    keys[event.keys] = false;
}
