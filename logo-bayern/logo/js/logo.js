document.addEventListener('DOMContentLoaded', function(){

var logo = document.getElementById('logo-Bayern');

function changeBackground(color)   {
    logo.style.backgroundColor = color;
}

    /* Генерируем случайный цвет */
function getRandomColor() 
{
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /* меняем цвет при наведении.*/
logo.addEventListener('mouseenter', function()
{
    logo.classList.remove('logo-transition');
    changeBackground(getRandomColor());
    setTimeout(function(){logo.classList.add('logo-transition');},100);
});


    /* меняем цвет по таймеру */
setInterval(function(){
    changeBackground(getRandomColor());
}, 1000)

});


/* getElementById Возвращает ссылку на элемент по его идентификатору (ID) */

/* mouseenter- Событие mouseenter срабатывает,когда курсор заходит на элемент и уходит с него, есть 2 но.
    1 Не учитываются переходы внутри элемента. 2 События mouseenter не всплывает.*/

/* addEventListener Метод принимает 3 аргумента, событие, коллбэк функцию и фазу. */

/* Событие DOMContentLoaded происходит когда весь HTML был полностью загружен и пройден парсером,
не дожидаясь окончания загрузки таблиц стилей, изображений и фреймов. */




