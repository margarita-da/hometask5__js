/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то дабавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */


const homeworkContainer = document.querySelector('#homework-container');
// const button = homeworkContainer.createElement('button');
// button.addEventListener('click', function(){
//   const div = homeworkContainer.createElement('div')

//   div.style.color = col
//   div.style.width = getRandomInt(10, 100)
//   div.style.height = getRandomInt(10, 100)
//   div.style.position = "absolute"
//   div.style.top = getRandomInt(0, 200)
//   div.style.left = getRandomInt(0, 200)

// })

/*
 Функция должна создавать и возвращать новый div с классом draggable-div и случайными размерами/цветом/позицией
 Функция должна только создавать элемент и задвать ему случайные размер/позицию/цвет
 Функция НЕ должна добавлять элемент на страницу. На страницу элемент добавляется отдельно

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
 */
function createDiv() {
  const draggable = document.createElement('div');
  draggable.classList.add('draggable-div')
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; 
// }
const randomic = Math.floor(Math.random()* 100);

let a,b,c;
a = Math.round(255.0*Math.random());
b = Math.round(255.0*Math.random());
c = Math.round(255.0*Math.random());

draggable.style.background = `rgb(${a},${b},${c} )` 
draggable.style.width = randomic + 'px'
draggable.style.height = randomic + 'px'
draggable.style.position = 'absolute'
draggable.style.top = randomic + 'px'
draggable.style.left = randomic + 'px'

    return draggable
}

/*
 Функция должна добавлять обработчики событий для перетаскивания элемента при помощи drag and drop

 Пример:
   const newDiv = createDiv();
   homeworkContainer.appendChild(newDiv);
   addListeners(newDiv);
 */
function addListeners(target) {
}

let addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function() {
    // создать новый div
    const div = createDiv();

    // добавить на страницу
    homeworkContainer.appendChild(div);
    // назначить обработчики событий мыши для реализации D&D
    addListeners(div);
    // можно не назначать обработчики событий каждому div в отдельности, а использовать делегирование
    // или использовать HTML5 D&D - https://www.html5rocks.com/ru/tutorials/dnd/basics/
});

export {
    createDiv
};
