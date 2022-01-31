'use strict';
let title = prompt('Как называется ваш проект?'),
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные"),
    screenPrice = +prompt("Сколько будет стоить данная работа?", "12000"),
    adaptive = confirm("Нужен ли адаптив на сайте?"),
    service1 = prompt("Какой дополнительный тип услуги нужен?"),
    servicePrice1 = +prompt("Сколько это будет стоить?"),
    service2 = prompt("Какой дополнительный тип услуги нужен?"),
    servicePrice2 = +prompt("Сколько это будет стоить?"),
    rollback = +(Math.ceil(Math.random()*100)),
    fullPrice = 100000;

fullPrice = screenPrice + servicePrice1+ servicePrice2;
let servicePercentPrice = fullPrice - rollback;
console.log(servicePercentPrice);

//конструкция условий расчета
if (fullPrice > 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice > 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0){
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что то пошло не так");
}



console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей" + "(" + Math.round(screenPrice/77.82) + " долларов" + " или " + Math.round(screenPrice/2.7) + " гривен" + " или " + Math.round(screenPrice/12.23) + " юаней" + ")");

console.log("Стоимость разработки сайта " + fullPrice + " рублей" + "(" + Math.round(fullPrice/77.82) + " долларов" + " или " + Math.round(fullPrice/2.7) + " гривен" + " или " + Math.round(fullPrice/12.23) + " юаней" + ")");

console.log(screens.toLowerCase().split(" "));
console.log("Процент отката посреднику за работу " + Math.ceil(fullPrice * (rollback/100)) + " монгольских тубриков");

