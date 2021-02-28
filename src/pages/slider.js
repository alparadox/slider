/* let slider = document.querySelector(".slider__circle");
slider.style.background = "red";
slider.style.height = "50px";
slider.style.width = "50px";
slider.style.left = "80%";
slider.classList.add("list");
slider.classList.remove("slider__circle");
console.log(slider); */

//в переменной line  находится html элемент с таким классом
let line = document.querySelector(".slider__liner");
//аналогично для cicrle
let circle = document.querySelector(".slider__circle");
//в переменной widthCircle лежит значение width элемента circle, передаваемой функцей get..
let circleWidth = circle.getBoundingClientRect().width;

//на элемент line вещается обработчик событий по клику, вызывается стрелочная функция, в нее передается параметр
// event - объект события. Event - объект, в котором хранятся все свойства события на элементе (каждая точка - свой евент).
// В функции используется как параметр. В теле функции можно работать над любым свойством, содержащимся в event.
line.onclick = (event) => {
  //в переменную вложено значение координаты X расположения элемента line
  let linePositionX = line.getBoundingClientRect().x;
  // в переменную вложено выражение = координата x события клика - координа х элемента line
  let position = event.clientX - linePositionX;
  //меняем свойство left у элемента circle, корректируем положение шарика, чтобы его центр был на курсоре, а не справа от него
  circle.style.left = position - circleWidth / 2 + "px";
  console.log(position - circleWidth / 2);
};
